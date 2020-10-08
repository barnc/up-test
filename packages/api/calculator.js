import regions from './regions.js'

export default ({
    postcode,
    quantity,
    packageId
}) => {
    const VAT = 1.2;
    let total = 0;

    let packageCost = getPackageCost(packageId)
    let orderCost = packageCost * quantity;
    total += orderCost;
    total *= VAT
    total += getShippingCost(orderCost, postcode)


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

const getShippingCost = (orderCost, postcode) => {
    const freeShippingCutoff = 30
    const baseDelivery = orderCost > freeShippingCutoff ? 0 : 7.24;
    // This would likely actually be done via an async service
    const surchargeRegion = getSurchargeRegionFromPostcode(postcode)
    return baseDelivery + (surchargeRegion ? surchargeRegion.surcharge : 0);
}

const getSurchargeRegionFromPostcode = (postcode) => {
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
