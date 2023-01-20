const CURRENCY_FOMARTER= new Intl.NumberFormat(undefined,{
    style:"currency",
    currency:"USD"
})

export default function Currency(number:any){
    return(
        CURRENCY_FOMARTER.format(number)
    )
}