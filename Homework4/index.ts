import { ClientFacade } from "./src/ClientFacade";
import { Address } from "./src/Address";

const client = new ClientFacade();

client.createShip(
  {
    toZipCode: "65068",
    fromZipCode: "16060",
    toAddress: new Address("NY", "New York", "Manheten").toString(),
    fromAddress: new Address("LA", "Los angelos", "Beverly hills").toString(),
    weight: 161,
    shipmentID: 47,
  },
  {
    isFragile: true,
    notLeave: true,
    returnReceipt: true,
  }
);

console.log(client.ship());
