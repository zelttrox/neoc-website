import './Docs.css'
import ReactMarkdown from 'react-markdown'

function Docs() {
    const markdownContent = `
***
# Divisions
You can create a division using the \`#\` character and the name of the division next to it.
\`\`\`
#identification
\`\`\`
This means you are now typing in the \`IDENTIFICATION\` division until you enter another division.
There are 4 divisions in native COBOL.
| Division | Description | NeoC | COBOL |
|----------|-------------|------|-------|
| **Identification** | To declare program informations | \`#identification\` | \`IDENTIFICATION DIVISION.\` |
| **Environment** | To mention environment related data | \`#environment\` | \`ENVIRONMENT DIVISION.\` |
| **Data** | To declare variables and records | \`#data\` | \`DATA DIVISION.\` |
| **Procedure** | This is where you add your code | \`#procedure\` | \`PROCEDURE DIVISION.\` |

***
# Identification
Once in the \`IDENTIFICATION\` division, you can declare headers like this :
\`\`\`
[header-name] = [value] ;
\`\`\`
\`\`\`
program = "Hello World" ;
\`\`\`
There are 5 informations you can add to your \`IDENTIFICATION\` division, some of them are optional.
| Header | Description | Optional | NeoC | COBOL |
|-------------|-------------|----------|------|-------|
| Program ID | The ID of your program. | No | \`program\` | \`PROGRAM-ID\` |
| Author | The author of the program. | Yes | \`author\` | \`AUTHOR\` |
| Installation | The entreprise or company who installed the program | Yes | \`installation\` | \`INSTALLATION\` |
| Date written | The date of the program writting | Yes | \`date\` | \`DATE-WRITTEN\` |
| Security | Optional security notes about the program | Yes | \`security\` | \`SECURITY\` |

There is also a header named \`DATE-COMPILED\` which is generated automatically by the NeoC engine.

***
# Data
## Variables
NeoC currently supports 3 types of variables: \`string\`, \`int\` and \`float\`.
To declare a variable, you can use the \`var\` key, followed by the variable name, it's type, and it's size.
In native COBOL, the max size of a variable is always required, so it is also required in NeoC.
\`\`\`
var [var-name] [var-type] [var-size] ;
\`\`\`
\`\`\`
var account_name string 32 ;
\`\`\`
You can also directly add a value to a variable by adding an equal \`=\` sign followed by a value.
\`\`\`
var [var-name] [var-type] [var-size] = [value] ;
\`\`\`
\`\`\`
var price int 2 = 10 ;
\`\`\`
    `

    return (
        <div className='flex-docs'>
            <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </div>
    )
}

export default Docs