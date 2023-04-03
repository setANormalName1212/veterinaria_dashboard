import { v4 as uuidv4 } from 'uuid'

export const orders = [
    {
        orderID: 1,
        items: [
            {
                title: "Whiskas sabor pescado x 1Kg.",
                price: 300,
                qty: 2
            },
            {
                title: "correa para gato",
                price: 570,
                qty: 1
            }
        ],
        name: "federico figueroa",
        status: "ready"
    },
    {
        orderID: 2,
        items: [
            {
                title: "Whiskas sabor pescado x 1Kg.",
                price: 300,
                qty: 4
            }
        ],
        name: 'florencia ojeda',
        status: "not ready"
    },
    {
        orderID: 3,
        items: [
            {
                title: "Antiparasitario",
                price: 560,
                qty: 1
            }
        ],
        name: '',
        status: "not ready"
    },
    {
        orderID: 4,
        items: [
            {
                title: "Antiparasitario",
                price: 560,
                qty: 1
            }
        ],
        status: "not ready"
    },
    {
        orderID: 5,
        items: [
            {
                title: "Antiparasitario",
                price: 560,
                qty: 1
            }
        ],
        status: "ready"
    }
]