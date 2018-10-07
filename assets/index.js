import { requestPage } from "felis-silvestris-paging";

const htmlEltOpts = {
    pageElContainerId: '#page-el-container',
    tBodyId: '#mybody',
    pageElChildClassName: 'page-el-child'
}

requestPage('http://localhost:8080/Paging/api.php','?page=1',
    htmlEltOpts,
    err=>{
        console.error(err)
    }
)