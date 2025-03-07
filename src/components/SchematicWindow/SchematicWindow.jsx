import React from 'react';
import SchematicWindowComponent from './SchematicWindowComponent'; 
import SchematicDescription from './SchematicDescription';

/**
 * The scehmatic window component.
 */
const SchematicWindow = () => {
    return (
        <div className="schematic-window">
                <SchematicWindowComponent />
                <SchematicDescription />
        </div>
    );
}

export default SchematicWindow;