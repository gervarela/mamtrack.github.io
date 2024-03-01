function generateUUID() {
    let d = new Date().getTime(); // Timestamp actual
    if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
        d += performance.now(); // Usa performance.now() si está disponible
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}


function generateTimestampString() {
    const date = new Date(); 
    const timestampString = date.toISOString(); 
    return timestampString;
}

function trackPageView() {
    const event = {
        "timestamp": generateTimestampString(),
        "id": generateUUID(),
        "tenant": "b1d8df26-af36-40b5-93d7-5b606cd398ba",
        "project": "ac2ac2d1-5542-4f2c-afbd-07e2a65301db",
        "origin": "852d42a2-e62a-4b36-9669-b902a13a3d74",
        "action": "view",
        "properties": {
            "keys": [
                "device"
            ],
            "values": [
                "mobile"
            ]
        },
        "node": {
            "id": "852d42a2-e62a-4b36-9669-b902a13a3d74",
            "type": "page",
            "name": "home-page",
            "properties": {
                "keys": [
                    "title",
                    "meta_description",
                    "meta_keywords",
                    "page_type"
                ],
                "values": [
                    "Example Page Title",
                    "Bla bla blba",
                    "bla, ble, bli",
                    "home"
                ]
            }
        },
        "user": {
            "id": "51ddf124-b338-4cfd-8817-0d6b877d1047",
            "user_id": "86d78fd8-fe26-4e43-849c-27646da9c640",
            "gender": "male",
            "birth_year": 1982,
            "country": "Spain",
            "region": "Galicia",
            "city": "Ourense",
            "properties": {
                "keys": [
                    "custom_property"
                ],
                "values": [
                    "value"
                ]
            }
        }
    }

    console.log(event)

    fetch(
        'https://api.tinybird.co/v0/events?name=events_in',
        {
            method: 'POST',
            body: JSON.stringify(event),
            headers: { Authorization: 'Bearer p.eyJ1IjogIjdmNTJjYTUwLTYxNmMtNGNiNS1iNzI1LTViZWI3MDM4MmI0NCIsICJpZCI6ICJiNWEwZTg1Ny04NTk3LTRkYTMtYTExMC1iYmIzMjE4Njg0YjciLCAiaG9zdCI6ICJldV9zaGFyZWQifQ.Hh9-5fhEiLdN9tnjCnI5moUmLmh_lVhrzdWyfdRZi0M' }
        }
    )
    .then(res => res.json())
    .then(data => console.log(data))

}


function trackButton() {
    const event = {
        "timestamp": generateTimestampString(),
        "id": generateUUID(),
        "tenant": "b1d8df26-af36-40b5-93d7-5b606cd398ba",
        "project": "ac2ac2d1-5542-4f2c-afbd-07e2a65301db",
        "origin": "4fad7f75-f772-4bf5-afda-3b467b792762",
        "action": "click",
        "properties": {
            "keys": [
                "device"
            ],
            "values": [
                "mobile"
            ]
        },
        "node": {
            "id": "4fad7f75-f772-4bf5-afda-3b467b792762",
            "type": "button",
            "name": "buy-button",
            "properties": {
                "keys": [
                    "label",
                    "action"
                ],
                "values": [
                    "Buy",
                    "buy();"
                ]
            }
        },
        "user": {
            "id": "51ddf124-b338-4cfd-8817-0d6b877d1047",
            "user_id": "86d78fd8-fe26-4e43-849c-27646da9c640",
            "gender": "male",
            "birth_year": 1981,
            "country": "Spain",
            "region": "Galicia",
            "city": "Ourense",
            "properties": {
                "keys": [
                    "custom_property"
                ],
                "values": [
                    "value"
                ]
            }
        }
    }
    
    console.log(event)

    fetch(
        'https://api.tinybird.co/v0/events?name=events_in',
        {
            method: 'POST',
            body: JSON.stringify(event),
            headers: { Authorization: 'Bearer p.eyJ1IjogIjdmNTJjYTUwLTYxNmMtNGNiNS1iNzI1LTViZWI3MDM4MmI0NCIsICJpZCI6ICJiNWEwZTg1Ny04NTk3LTRkYTMtYTExMC1iYmIzMjE4Njg0YjciLCAiaG9zdCI6ICJldV9zaGFyZWQifQ.Hh9-5fhEiLdN9tnjCnI5moUmLmh_lVhrzdWyfdRZi0M' }
        }
    )
    .then(res => res.json())
    .then(data => console.log(data))
}


document.addEventListener('DOMContentLoaded', function() {
    trackPageView();
});