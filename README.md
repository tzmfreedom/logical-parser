# LogicalParser

logical parser in JavaScript

## Usage

```bash
npm install logical-parser
```

```javascript
const parse = require('logical-parser')
parse('1 AND 2 OR 3')

// => { type: 'operator',
//      left:
//       { type: 'operator',
//         left: { type: 'value', value: '1' },
//         right: { type: 'value', value: '2' },
//         operator: 'AND' },
//      right: { type: 'value', value: '3' },
//      operator: 'OR' }
```