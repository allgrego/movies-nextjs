import Link from 'next/link';
import {Fragment,useEffect} from 'react';

const Pagination = ({page,last_page,setPage}) => {

    const toNextPage = () =>{
        setPage(page+1);
    }

    const toPreviousPage = () =>{   
        setPage(page-1);
    }

    const toFirstPage = () =>{
        setPage(1);
    }

    const toLastPage = () =>{
        setPage(last_page);
    }

    useEffect(()=>{
        setPage(page);
    });

    return ( 
        <Fragment>
            {page>1? 
            <Fragment>
                <li className="page-item" onClick={toFirstPage}>
                    <Link href="/">
                        <div className="page-link">First</div>
                    </Link>
                </li>
                <li className="page-item" onClick={toPreviousPage}>
                    <Link href="/">
                        <div className="page-link">Previous</div>
                    </Link>
                </li>
                <li className="page-item" onClick={toPreviousPage}>
                    <Link href="/">
                        <div className="page-link">{page-1}</div>
                    </Link>
                </li>
            </Fragment>
            :
            <Fragment>
                <li className="page-item disabled">
                    <Link href="javascript:void(0)">
                        <div className="page-link">Previous</div>
                    </Link>
                </li>
            </Fragment>
            }
            <li className="page-item">
                <Link href="javascript:void(0)">
                    <div className="page-link">{page}</div>
                </Link>
            </li>
            {page<last_page? 
            <Fragment>
                <li className="page-item" onClick={toNextPage}>
                <Link href="/">
                    <div className="page-link">{page+1}</div>
                </Link>
                </li>
                <li className="page-item" onClick={toNextPage}>
                    <Link href="/">
                        <div className="page-link">Next</div>
                    </Link>
                </li>
                <li className="page-item" onClick={toLastPage}>
                    <Link href="/">
                        <div className="page-link">Last</div>
                    </Link>
                </li>
            </Fragment>
            :
            <Fragment>
                <li className="page-item disabled">
                    <Link href="javascript:void(0)">
                        <div className="page-link">Next</div>
                    </Link>
                </li>
            </Fragment>
            }
        </Fragment>        
     );
}
 
export default Pagination;