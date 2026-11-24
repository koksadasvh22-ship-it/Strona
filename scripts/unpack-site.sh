#!/usr/bin/env sh
set -eu
ROOT="$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)"
cd "$ROOT"
if [ ! -f "randkuj-normalnie-landing.zip" ]; then
  echo "Brak randkuj-normalnie-landing.zip w katalogu głównym." >&2
  exit 1
fi
unzip -o randkuj-normalnie-landing.zip -d .
echo "Projekt rozpakowany do randkuj-normalnie-site/."
