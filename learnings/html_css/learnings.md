1. never use innerText, use textContent instead.
  1. It does not obey css laws. hidden elements are not shown.
  2. Firefox does not support it as it is not part of any standard.
  3. poor performance
2. innerHTML setter affects eventHandler, dom manipulation(createElement, createTextNode, appendChild, removeChild)
3. For a square element, Any radius larger than half the width will result in a circle. html_css/css/css-secrets/larger-than-100-px-radius.html