import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const { title = 'testtitle', desc = 'testdesc', twitter = '@bketelsen' } = req.query;

  const width = 1200;
  const height = 600;
  const background = '#36393f'; // The background color of your image
  const headshotPath = path.join(process.cwd(), 'src/images/photos/home/headshot.JPG');

  // Read the headshot image and resize it to fit the final image
  const headshotBuffer = await sharp(headshotPath)
    .resize(250, 250) // Adjust size as needed
    .png() // Ensure the image is in PNG format to retain transparency
    .toBuffer();

  // Create a circular mask
  const mask = Buffer.from(
    `<svg width="250" height="250">
      <circle cx="125" cy="125" r="125" fill="#fff" />
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

  // Create the text SVG
  const textSVG = `
    <svg width="${width}" height="${height}">
      <style>
        .title { fill: white; font-size: 64px; font-family: Arial, Helvetica, sans-serif; font-weight: bold; }
        .desc { fill: white; font-size: 36px; font-family: Arial, Helvetica, sans-serif; }
        .footer { fill: white; font-size: 24px; font-family: Arial, Helvetica, sans-serif; }
      </style>
      <text x="50" y="100" class="title">${title}</text>
      <text x="50" y="160" class="desc">${desc}</text>
      <text x="50" y="580" class="footer">asareen.in</text>
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
        top: 175, // Vertically center the headshot
        left: width - 300 - 250, // Position to fit within the background
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
