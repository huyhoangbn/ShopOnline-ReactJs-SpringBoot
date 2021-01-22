import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import callApi from '../utils/apiCaller'
import ProductsContainer from '../containers/ProductsContainer';

// class PageComponents extends Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       totalPage: 0
//     }
//   }
//   useStyles = makeStyles((theme) => ({
//     root: {
//       '& > * + *': {
//         marginTop: theme.spacing(2),
//       },
//     },
//   }));

//   getTotalPage = () => {
//     callApi('product/getListProduct', 'GET', null).then(res => {
//       this.setState({
//           totalPage: (res.data.length % 6 === 0) ? res.data.length / 6 : ((res.data.length - res.data.length % 6) / 6 + 1)
//       });
//     });
//   }

//   render(){
//     var classes = this.useStyles();
//     [page, setPage] = React.useState(1);
//     handleChange = (event, value) => {
//       setPage(value);
//       console.log(value)
//     };
//     return (
//       <div className={classes.root}>
//         <ProductsContainer page={page}></ProductsContainer>   
//         <Pagination count= {10} page={page} onChange={handleChange} />
//       </div>
//     );
//   }
// }

// export default PageComponents


const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function PaginationControlled(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    console.log(value)
  };
   
  return (
          <div className={classes.root}>
            <ProductsContainer page={page} ></ProductsContainer>   
            <div>
            <Pagination count= {props.pageNumber} page={page} onChange={handleChange} style={{marginLeft:'450px'}}/>
            </div>
            
          </div>
        );
}


