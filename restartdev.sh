PIDS=$(ps aux | grep "[n]ext" | awk '{print $2}')

if [ -n "$PIDS" ]; then
    echo "$PIDS" | xargs kill -9
fi

next dev > /app/nextdev.out 2>&1 &