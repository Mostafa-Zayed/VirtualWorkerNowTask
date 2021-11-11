// define constants 
const UNLIMITED_REWARDS = 1.1;
const LIFETIME_REWARDS = 1.2;
const BREX_PERCENTAGE =  0.3;
const AMEX_PERCENTAGE =  1.3;
const STRIPE_PERCENTAGE =  2.9;

// fetch input number 4 team project
const inputTeamProject = document.getElementById('teamProject');

// add event blur to input team project
inputTeamProject.addEventListener('blur',()=>{
    // call sum and calculate unlimited rewards
    const unlimitedRewards = calculateSummitionOfValues() * UNLIMITED_REWARDS;
    // call sum and calculate life tiem rewards 
    const LifetimeRewards  = calculateSummitionOfValues() * LIFETIME_REWARDS;
    // fetch div unlimited 
    const divUnlimitedRewards = document.getElementById('ulimited_rewards');
    // fetch div life tiem 
    const divLifeTimeRewards = document.getElementById('lifetime_rewards');
    
    // render content of div unlimited 
    divUnlimitedRewards.innerHTML = "<div class='col-4 text-end'><span class='text-muted'>Unlimited Rewards</span></div><div class='col-8'><div class='row'><div class='col-5'><p class='custom-text-input2 rounded-end mt-2'></p></div><div class='col-6 text-start'> $"+ unlimitedRewards.toFixed(3) +"</div></div></div>";
    // render content of div live time
    divLifeTimeRewards.innerHTML = "<div class='col-4 text-end'><span class='text-uppercase'>lifetime Rewards</span></div><div class='col-8'><div class='row'><div class='col-5'><p class='custom-text-input3 rounded-end'></p></div><div class='col-6 text-start'> $"+ LifetimeRewards.toFixed(3) +"</div></div></div>";
});


/*
    calculate summition of inputs values and returning it
    @return  0 | float number
*/
function calculateSummitionOfValues()
{
    let sum = 0;
    const inputs = document.querySelectorAll('input[type="number"]');
    for(i = 0; i < inputs.length; i++) {
        var inputVal = inputs[i].value;
        sum += parseFloat(inputVal.trim());
    }
    return isNaN(sum) ? 0 : sum;
}

/*
    calculate brand percentage and render div brand content
    @param brand String
    @return void
*/
function getBrandPercentage(brand)
{
    const divBrand = document.getElementById('brand');
    switch(brand) {
        case 'amex':
            divBrand.innerHTML = "<div class='col-4 text-end'><span class='text-muted'>" + brand.toUpperCase() + " Business Card</span></div><div class='col-8'><div class='row'><div class='col-5'><p class='custom-text-input2 rounded-end mt-2'></p></div><div class='col-6 text-start'>$" + (calculateSummitionOfValues() * AMEX_PERCENTAGE) +"</div></div></div>";
            break;
        case 'stripe':
            divBrand.innerHTML = "<div class='col-4 text-end'><span class='text-muted'>" + brand.toUpperCase() + " Business Card</span></div><div class='col-8'><div class='row'><div class='col-5'><p class='custom-text-input2 rounded-end mt-2'></p></div><div class='col-6 text-start'>$" + (calculateSummitionOfValues() * STRIPE_PERCENTAGE) +"</div></div></div>";
            break;
        case 'brex':
            divBrand.innerHTML = "<div class='col-4 text-end'><span class='text-muted'>" + brand.toUpperCase() + " Business Card</span></div><div class='col-8'><div class='row'><div class='col-5'><p class='custom-text-input2 rounded-end mt-2'></p></div><div class='col-6 text-start'>$" + (calculateSummitionOfValues() * BREX_PERCENTAGE) +"</div></div></div>";
            break;
    }
}