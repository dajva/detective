# Makefile to start a web server for development

.PHONY: run

# Starts a local web server on port 8000
run:
	@echo "Starting local server at http://localhost:8000"
	@echo "Press Ctrl+C to stop the server."
	python3 -m http.server 8000

# Alternative if you prefer a different port
# make run PORT=9000
PORT ?= 8000
run-port:
	python3 -m http.server $(PORT)
