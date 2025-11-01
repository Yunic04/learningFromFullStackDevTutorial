import { propertyForSaleArr } from "./properties/propertyForSaleArr.js"
import { placeholderPropertyObj } from "./properties/placeholderPropertyObj.js"

function getPropertyHtml(propertyObj = placeholderPropertyObj){
    if (propertyObj.length) {
        return propertyObj.map(property => getHtml(property)).join('')
    } else {
        return getHtml(propertyObj)
    }
}

function getHtml(property){
    const { propertyLocation, priceGBP, roomsM2, comment, image} = property
    const totalSize = roomsM2.reduce((total, size) => total + size, 0)
    return `
    <section class="card">
        <img src="images/${image}">
        <div class="card-right">
            <h2>${propertyLocation}</h2>
            <h3>£${priceGBP}</h3>
            <p>${comment}</p>
            <h3>${totalSize} m²</h3>
        </div>
    </section>
    `
}

// document.getElementById('container').innerHTML = getPropertyHtml()
document.getElementById('container').innerHTML = getPropertyHtml(propertyForSaleArr)