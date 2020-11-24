import Head from 'next/head';
import {Fragment} from 'react'; 
import Footer from './Footer';

const Container = (props) => {
    return ( 
        <Fragment>
            <Head>
                <title>MOVIES-NEXTJS</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/darkly/bootstrap.min.css" integrity="sha384-nNK9n28pDUDDgIiIqZ/MiyO3F4/9vsMtReZK39klb/MtkZI3/LtjSjlmyVPS3KdN" crossorigin="anonymous"/>

            </Head>
            <div id="wrapper">
                {props.children}
            </div>
            <Footer/>
        </Fragment>
     );
}
 
export default Container;