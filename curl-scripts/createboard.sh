curl --include --request POST "https://tic-tac-toe-wdi.herokuapp.com/games/" \
  --header "Content-type: application/json" \
  --data '{
  "game": {
    "id": 1,
    "cells": ["x","o","x","o","x","o","x","o","x"],
    "over": false,
    "player_x": {
      "id": 1,
      "email": "and@and.com"
    },
    "player_o": null
  }
}'

echo
