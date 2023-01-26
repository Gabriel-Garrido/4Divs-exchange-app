import React, { useState, useEffect } from "react";

export const BankAccountItem = (props) => {
    return (
        
            <option 
                value={props.item.id}                
                >
                Cuenta {props.item.account_number} del banco {props.item.bank}
            </option>
       
    )
}