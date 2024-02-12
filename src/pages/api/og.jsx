import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

function wrapText(text, maxCharsPerLine) {
    const words = text.split(' ');
    const lines = [];
    let currentLine = words[0];
  
    words.slice(1).forEach((word) => {
      const newLine = `${currentLine} ${word}`;
      if (newLine.length > maxCharsPerLine) {
        lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = newLine;
      }
    });
  
    lines.push(currentLine); // Push the last line
    return lines;
  }

export default async function handler(req, res) {
  const { title = 'testtitle', desc = 'testdesc'} = req.query;

  const width = 1000;
  const height = 500;
  const background = '#27272a'; // The background color of your image
  const headshotPath = path.join(process.cwd(), 'src/images/photos/home/headshot.JPG');

  // Read the headshot image and resize it to fit the final image
  const headshotBuffer = await sharp(headshotPath)
    .resize(350, 350) // Adjust size as needed
    .png() // Ensure the image is in PNG format to retain transparency
    .toBuffer();

  // Create a circular mask
  const mask = Buffer.from(
    `<svg width="350" height="350">
      <circle cx="175" cy="175" r="175" fill="#fff" />
    </svg>`
  );

  // Composite the headshot image over the mask
  const headshotWithMask = await sharp(headshotBuffer)
    .composite([
      {
        input: mask,
        blend: 'dest-in', // Use the mask to create a circular image
      },
    ])
    .toBuffer();
    const maxCharsPerLine = 25; // Adjust max chars per line as needed
    const descLines = wrapText(desc, maxCharsPerLine);
    // Create the text SVG
    const textSVG = `
    <svg width="${width}" height="${height}">
        <style>
        .title { fill: white; font-size: 64px; font-family: 'Open Sans', Helvetica, sans-serif; font-weight: bold; }
        .desc { fill: white; font-size: 34px; font-family: 'Open Sans', Helvetica, sans-serif; white-space: pre; }
        .footer { fill: white; font-size: 24px; font-family: 'Open Sans', Helvetica, sans-serif; }
        </style>
        <text x="100" y="130" class="title">${title}</text>
        ${descLines
        .map(
            (line, i) => `<text x="100" y="${190 + i * 40}" class="desc">${line}</text>`
        )
        .join('')}
        <text x="100" y="460" class="footer">asareen.in</text>
    </svg>
    `;

  // Convert the SVG text to a buffer
  const textBuffer = Buffer.from(textSVG);

  // Create the background image
  const backgroundImage = sharp({
    create: {
      width,
      height,
      channels: 4,
      background,
    },
  }).png();

  // Composite the masked headshot and the text onto the background
  const imageBuffer = await backgroundImage
    .composite([
      {
        input: headshotWithMask,
        top: (height - 350) / 2, // Vertically center the headshot
        left: width - 350 - 100, // Position to fit within the background
      },
      {
        input: textBuffer,
        top: 0,
        left: 0,
      },
    ])
    .toBuffer();

  res.setHeader('Content-Type', 'image/png');
  res.send(imageBuffer);
}
