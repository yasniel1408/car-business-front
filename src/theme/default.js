export const theme = {
    "global": {
      "colors": {
        "background": {
          "light": "#ffffff",
          "dark": "#000000",
          "primaryDark": "rgb(61 19 141)",
          "primary": "rgba(125,76,219,1)",
          "secundary": "#FD6FFF"
        }
      },
      "font": {
        "family": " Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\",  \"Helvetica Neue\", Arial, sans-serif,  \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\""
      }
    },
    "button": {
      "extend": [
        null
      ]
    },
    formField: {
      border: {
        error: {
          color: 'border',
        },
        color: 'border',
        side: 'all',
      },
      disabled: {
        background: {
          color: undefined,
        },
        border: {
          color: 'status-disabled',
        },
        label: {
          color: 'status-disabled',
        },
      },
      error: {
        background: {
          color: { light: '#FF404033', dark: '#FF40404D' },
        },
        size: 'xsmall',
        color: 'text-weak',
        margin: {
          start: 'none',
        },
      },
      help: {
        size: 'xsmall',
        color: 'text-weak',
        margin: {
          start: 'none',
          bottom: 'xsmall',
        },
      },
      info: {
        size: 'xsmall',
        color: 'text-weak',
        margin: {
          start: 'none',
        },
      },
      label: {
        size: 'xsmall',
        color: 'text-weak',
        margin: {
          horizontal: 'none',
        },
      },
      round: '4px',
    },
  }
