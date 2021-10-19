import React from 'react';

import ContentRowTotales from './ContentRowTotales';
function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Zinnia Dashboard</h1>
					</div>
					<ContentRowTotales />
				</div>

        </React.Fragment>
    )

}
export default ContentRowTop;