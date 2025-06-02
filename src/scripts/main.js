'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');

  const appendRow = document.querySelector('.append-row');
  const removeRow = document.querySelector('.remove-row');
  const appendColumn = document.querySelector('.append-column');
  const removeColumn = document.querySelector('.remove-column');

  if (!table || !appendRow || !removeRow || !appendColumn || !removeColumn) {
    return;
  }

  appendRow.addEventListener('click', () => {
    const newRow = document.createElement('tr');
    const columnCount = table.rows[0]?.cells.length || 1;

    for (let i = 0; i < columnCount; i++) {
      const newCell = document.createElement('td');

      newRow.appendChild(newCell);
    }

    table.appendChild(newRow);
    updateAppendRowButton();
  });

  removeRow.addEventListener('click', () => {
    if (table.rows.length <= 2) {
      return;
    }
    table.deleteRow(-1);

    updateAppendRowButton();
  });

  appendColumn.addEventListener('click', () => {
    for (const row of table.rows) {
      const newCell = document.createElement('td');

      row.appendChild(newCell);
    }

    updateAppendColumnButton();
  });

  removeColumn.addEventListener('click', () => {
    const columnCount = table.rows[0]?.cells.length || 0;

    if (columnCount <= 2) {
      return;
    }

    for (const row of table.rows) {
      row.deleteCell(-1);
    }

    updateAppendColumnButton();
  });

  function updateAppendRowButton() {
    appendRow.disabled = table.rows.length >= 10;
  }

  function updateAppendColumnButton() {
    const columnCount = table.rows[0]?.cells.length || 0;

    appendColumn.disabled = columnCount >= 10;
  }
});
