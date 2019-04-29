const schema = {
    prefix: 'YourUseCase',
    fields: {
        someField: {
            pointer: 0,
            inputSource: "params",
            testValue: "some value",
            isDate: false,
            expose: true,
            partials: []
        }
    },
    variants: [
        "I want to eat something that cost nothing. (this will be text_0)",
        ["group of variants part one (this will be text_0)", "group of variants part two (this will be text_1)"]
    ],
    resultOverrides: [{
        if: "someField",
        is: "today",
        use: "text_0",
        vehicle: true,
        join: true
    },{
        if: "someField",
        is: "tomorrow",
        use: "text_1",
        vehicle: true,
        join: false
    }]
};

module.exports = {
    schema: JSON.stringify(schema, null, 2)
};