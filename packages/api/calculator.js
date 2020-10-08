import regions from './regions.js'

export default ({
    postcode,
    quantity,
    packageId
}) => {
    const VAT = 1.2;
    let total = 0;

    console.log(getPackageCost(packageId))
    total += getPackageCost(packageId)
    total *= quantity
    total *= VAT

    total += getShippingCost(postcode)

    return total.toFixed(2)
}

const getPackageCost = (packageId) => {
    // simulate looking package costs up by a package id
    const packageCosts = {
        "1": 40,
        "2": 30,
        "3": 20,
        "4": 18,
        "5": 15
    }

    return packageCosts[packageId]
}

const getShippingCost = (postcode) => {
    // This would likely actually be done via an async service
    const region = getRegionFromPostcode(postcode)
    return region ? region.surcharge : 0;
}

const getRegionFromPostcode = (postcode) => {
    return regions.find(region => {
        return region.patterns.some(pattern => {
            return pattern.ranges.some(range => {
                // Construct a regex for each pattern variation
                const regex = new RegExp(`^${pattern.area}${range}`)
                // Ignore the last 3 characters of the postcode, as all postcodes end in 9AA format
                if (regex.test(postcode.slice(0, postcode.length - 3))) {
                    console.log("Match found: ", regex)
                    return true;
                }
            })
        })
    })
}
