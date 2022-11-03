import { ClientFacade } from "./src/ClientFacade";
import { Address } from "./src/Address";

const client = new ClientFacade();

client.createShip({
  toZipCode: "65068",
  fromZipCode: "76060",
  toAddress: new Address("NY", "New York", "Manheten").toString(),
  fromAddress: new Address("LA", "Los angelos", "Beverly hills").toString(),
  weight: 6,
  shipmentID: 47,
});

console.log(client.ship());
