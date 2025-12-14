
lint:
	deno run -A npm:@biomejs/biome lint

# Format, lint, and organize imports of all files
format:
    deno run -A npm:@biomejs/biome check --write