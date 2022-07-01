#!/bin/sh -e

usage() {
  echo "OVERVIEW: Build apps according to APP_BASE value. Meant to be used for Heroku deployment"
  exit
}

if [ "$1" = '-h' ] || [ "$1" = '--help' ]; then
  usage
fi

(
  PROJECT_ROOT="$(cd $(dirname $0)/..; pwd)"

  cd $PROJECT_ROOT

  if [ "$APP_BASE" = "packages/rockets-web" ]; then
    yarn start:web
  elif [ "$APP_BASE" = "packages/rockets-api" ]; then
    yarn sandbox:init
  else
    echo "Error: no build config for INATO_BUILD_ENV value '$INATO_BUILD_ENV'"
    exit 1
  fi
)