function precoDaCorrida(min, km) {
    if (min <= 20 && km <= 10) {
        const totalKm = km * 70
        const totalMin = min * 50
        console.log(Math.floor(totalMin + totalKm))
    } else if (min > 20 && km <= 10) {
        const primMin = 20 * 50
        const restoMin = (min - 20) * 30
        const totalKm = km * 70
        console.log(Math.floor(primMin + restoMin + totalKm))
    } else if (min <= 20 && km > 10) {
        const primKm = 70 * 10
        const restoKm = (km - 10) * 50
        const totalMin = min * 50
        console.log(Math.floor(primKm + restoKm + totalMin))
    } else {
        const primMin = 20 * 50
        const restoMin = (min - 20) * 30
        const primKm = 70 * 10
        const restoKm = (km - 10) * 50
        console.log(Math.floor(primKm + restoKm + primMin + restoMin))
    }
}


precoDaCorrida(min, km)