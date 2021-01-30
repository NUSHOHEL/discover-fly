                    /*----------------
                    Ticket Counter
                    -------------------*/
function ticketCounter(catagory,isIncrease){
    const ticketAmount = document.getElementById(catagory + '-ticket');
    const ticketValue = parseInt(ticketAmount.value);
    
    let ticketNewValue = ticketValue;
    if(isIncrease == true){
        ticketNewValue = ticketValue + 1;
       
    }
    if(isIncrease == false && ticketValue > 0){
        ticketNewValue = ticketValue - 1;
        
    }
    ticketAmount.value = ticketNewValue;
    let totalTicketCost = 0;
    if( catagory == 'firstClass'){
        totalTicketCost = ticketNewValue * 150;
        
    }
    if(catagory == 'economy'){
        totalTicketCost = ticketNewValue * 100;
        
    }
    subtotalCatculation()
}




/*--------------------------
CALCULATION AREA
// --------------------------*/




function subtotalCatculation(){
    const firstClassTicket = document.getElementById('firstClass-ticket');
    const firstClassTicketValue = parseInt(firstClassTicket.value);

    const economyTicket = document.getElementById('economy-ticket');
    const economyTicketValue = parseInt(economyTicket.value);
    
    const subTotalPrice = firstClassTicketValue * 150 + economyTicketValue * 100;
    document.getElementById('subtotal-price').innerText ='$' + subTotalPrice;


     const tax = subTotalPrice * 0.1;
     document.getElementById('tax-amount').innerText = '$' + tax

     const totalPrice = subTotalPrice + tax;
     document.getElementById('total-price').innerText ='$' + totalPrice;

    
}




/*-----------------------------------
        SWEET ALART SECTION
-------------------------------------*/



document.getElementById('submitButton').addEventListener('click', function(){

    const firstClassTicket = document.getElementById('firstClass-ticket');
    const firstClassTicketValue = parseInt(firstClassTicket.value);

    const economyTicket = document.getElementById('economy-ticket');
    const economyTicketValue = parseInt(economyTicket.value);

    const totalticket = firstClassTicketValue + economyTicketValue;

    if(totalticket == 0){
        swal({
            title: "Fields Empty!",
            text: "Please check the missing field!",
            icon: "warning",
          });
    }
    else{
        swal({
            title: "Congratulation!",
            text: "Your Ticket Has Been Reserved!",
            icon: "success",
          });
    }
})