// @TODO: Change this to a json file but for ease of input i've left it as js


export default [{
    name: "Industrial Scotland",
    surcharge: 1.07,
    patterns: [
        {
            area: "DD",
            ranges: [
                '[1-9]',
                '1[0-1]'
            ]
        },
        {
            area: "DG",
            ranges: [
                '[1-9]',
                '1[0-4]',
                '16'
            ]
        },
        {
            area: "EH",
            ranges: [
                '[1-9]',
                '[1-4][0-9]',
                '5[0-5]',
                '91',
                '95',
                '99'
            ]
        },
        {
            area: "FK",
            ranges: [
                '[1-9]',
                '1[0-9]',
                '2[0-1]',            
            ]
        },
        {
            area: "KA",
            ranges: [
                '[1-9]',
                '1[0-9]',
                '2[0-6]',  
                '29',
                '30'          
            ]
        },
        {
            area: "G",
            ranges: [
                '[1-9]',
                '[1-7][0-9]',
                '8[0-4]',  
                '90' 
            ]
        },
        {
            area: "KY",
            ranges: [
                '[1-9]',
                '1[0-6]',
                '99'  
            ]
        },
        {
            area: "ML",
            ranges: [
                '[1-9]',
                '1[0-2]',
            ]
        },
        {
            area: "PA",
            ranges: [
                '[1-9]',
                '1[0-9]',
                '2[1-9]',
                '3[0-7]',
                '80'
            ]
        },
        {
            area: "PH",
            ranges: [
                '[1-9]',
                '1[0-6]',
            ]
        },
        {
            area: "TD",
            ranges: [
                '[1-9]',
                '1[0-5]',
            ]
        },
    ]
}]

