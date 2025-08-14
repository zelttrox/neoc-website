import './CodeSnippets.css'

function CodeSnippets() {
    return (
        <div className="flex-snippets">
            <div className='code-snippet'>
            <pre>
            <code>
{`
#identification

    program: "TransactionProcessor"


#data

    transaction_file [
            trs:
                account_number int, 
                amount float,
                type string
    ]

    var total_deposit float 6.6
    var total_withdraw float 6.6


#procedure

    open(transaction_file)
    read(transaction_file)

    switch (transaction.type) {
        case "DEP":
            total_deposit += trs.amount
        case "WDR":
            total_withdraw += trs.amount
    }

    close(transaction_file)

    display("TOTAL DEPOSIT: ", total_deposit)
    display("TOTAL WITHDRAWAL: ", total_withdraw)

`}
            </code>
            </pre>
            </div>

            <div className='code-snippet'>
            <pre>
            <code>
{`
#identification

    program: "TransactionProcessor"


#data

    transaction_file [
            trs:
                account_number int, 
                amount float,
                type string
    ]

    var total_deposit float 6.6
    var total_withdraw float 6.6


#procedure

    open(transaction_file)
    read(transaction_file)

    switch (transaction.type) {
        case "DEP":
            total_deposit += trs.amount
        case "WDR":
            total_withdraw += trs.amount
    }

`}
            </code>
            </pre>
            </div>
        </div>
    )
}

export default CodeSnippets