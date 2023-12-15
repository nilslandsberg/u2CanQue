import React from 'react';
import { bulkBbq, sides } from '../menu-data';
import { renderBulkBbq, renderSides } from '../utils/renderMenuItems';

const BulkBbq = () => {
  return (
    <>
      <div className="z-30 bg-slate-600 p-5 text-2xl text-white text-center">
        Bulk BBQ
      </div>
      {renderBulkBbq(bulkBbq)}
      <div className="z-30 bg-slate-600 p-5 text-2xl text-white text-center" id="appetizers">
        Sides
      </div>
      {renderSides(sides)}
    </>
  );
}

export default BulkBbq;
