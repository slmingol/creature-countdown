# Use Caddy alpine for a lightweight image
FROM caddy:alpine

# Copy game files to Caddy's default directory
COPY index.html /usr/share/caddy/
COPY styles.css /usr/share/caddy/
COPY script.js /usr/share/caddy/
COPY logo.png /usr/share/caddy/
COPY timer-demo.html /usr/share/caddy/

# Copy Caddyfile configuration
COPY Caddyfile /etc/caddy/Caddyfile

# Expose port 80
EXPOSE 80

# Caddy will start automatically with the default CMD
