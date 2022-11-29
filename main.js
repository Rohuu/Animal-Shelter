var $table = $('#pet-table')

$(function () {

    // do an ajax call here to get the response. your response should be like responseData

    var responseData = [
        {
            "age": 12,
            "name": "Lyka",
            "breed": "Dasch",
        },
        {
            "age": 3,
            "name": "Albie",
            "breed": "Beagle",
        },
        {
            "age": 5,
            "name": "Happy",
            "breed": "Lab",
        },
        {
            "age": 6,
            "name": "Ramu",
            "breed": "Golden Retriever",
        },
        {
            "age": 7,
            "name": "Pinky",
            "breed": "Lab",
        },
        {
            "age": 21,
            "name": "Sweetie",
            "breed": "Beagle",
        },
        {
            "age": 11,
            "name": "Blacky",
            "breed": "Dasch",
        }
    ];
    $table.bootstrapTable({ data: responseData })
})
