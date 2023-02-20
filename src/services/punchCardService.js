import * as punchCardRepository from "../repositories/punchCardRepository.js"

function filterFactory(filter) {
    let dateFilter = { date: {} }
    let clientFilter = {}

    if(filter.client) clientFilter = { clients: { name: filter.client } }

    if(filter.date.from) dateFilter.date.gte = new Date(filter.date.from).toISOString()
    else dateFilter.date.gte = new Date("1970").toISOString()
    
    if(filter.date.to) dateFilter.date.lte = new Date(filter.date.to).toISOString()
    else dateFilter.date.lte = new Date().toISOString()

    return {
        where: {
            employees_worked_days: {
                some: { ...dateFilter, ...clientFilter }
            }
        }
    }
}

async function getPunchCardsData() {
    const punchCardsData = await punchCardRepository.getAllPunchCardsData();
    return punchCardsData;
}

async function getPunchCardsByEmployees(filterObject) {
    const punchCardsByEmployees = await punchCardRepository.getPunchCardsByEmployees(filterFactory(filterObject))
    return punchCardsByEmployees;
}

async function getPunchCardsByClients(filterObject) {
    const punchCardsByClients = await punchCardRepository.getPunchCardsByClients(filterFactory(filterObject));
    return punchCardsByClients;
}

export {
    getPunchCardsData,
    getPunchCardsByEmployees,
    getPunchCardsByClients
}