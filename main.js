var $table = $('#pet-table')

$(function () {

    // do an ajax call here to get the response. your response should be like responseData

    var responseData = [
        {
            "_id": "63850949ec2830dc9f065903",
            "age": 20,
            "name": "Leila Aguirre",
            "gender": "female",
            "company": "DANCERITY"
        },
        {
            "_id": "638509495017858500279bd1",
            "age": 25,
            "name": "Lott Schmidt",
            "gender": "male",
            "company": "WAAB"
        },
        {
            "_id": "638509493c057689a66bd2c5",
            "age": 25,
            "name": "Matthews Adkins",
            "gender": "male",
            "company": "TELLIFLY"
        },
        {
            "_id": "63850949ef395ad3c8700989",
            "age": 22,
            "name": "Vicky Sloan",
            "gender": "female",
            "company": "GYNKO"
        },
        {
            "_id": "63850949a416c427a73f5604",
            "age": 28,
            "name": "Saundra Wagner",
            "gender": "female",
            "company": "ELECTONIC"
        },
        {
            "_id": "63850949b069934e57ecf486",
            "age": 29,
            "name": "Yesenia Case",
            "gender": "female",
            "company": "TOURMANIA"
        },
        {
            "_id": "6385094902e61fbd03e233b5",
            "age": 22,
            "name": "Weaver Solomon",
            "gender": "male",
            "company": "VERBUS"
        },
        {
            "_id": "63850949c940c5b68bb83fb6",
            "age": 24,
            "name": "Sharp Tanner",
            "gender": "male",
            "company": "EXODOC"
        },
        {
            "_id": "63850949f0ea21e1ead73389",
            "age": 35,
            "name": "Rosario Mcmillan",
            "gender": "female",
            "company": "FOSSIEL"
        },
        {
            "_id": "638509492520a96034a70b57",
            "age": 25,
            "name": "Newton Ashley",
            "gender": "male",
            "company": "SYNKGEN"
        }
    ];
    $table.bootstrapTable({ data: responseData })
})
