
import config  from 'root/services/config';

const defaultHeader = {
  'method': 'GET'
};

export function request(path, header = defaultHeader) {
  return fetch(`${config.api}${path}`, header)
    .then(response => response.json())
    .catch(error => console.log(error));
}

export function getInvoices() {
  return request(config.path.invoices);
}

export function postNewInvoice(value) {
  const header = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(value)
  };
  return request(`${config.path.invoices}`, header);
}

export function postEditedInvoice(id, value) {
  const header = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(value)
  };
  return request(`${config.path.invoices}${id}`, header);
}
