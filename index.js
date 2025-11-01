import propertyForSaleArr from "./properties/propertyForSaleArr.js"
import placeholderPropertyObj from "./properties/placeholderPropertyObj.js"

function getPropertyHtml(properties = [placeholderPropertyObj]){
    return properties.map(property => {
        const { propertyLocation, priceGBP, roomsM2, comment, image } = property
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
    }).join('')
}

// document.getElementById('container').innerHTML = getPropertyHtml()
document.getElementById('container').innerHTML = getPropertyHtml(propertyForSaleArr)