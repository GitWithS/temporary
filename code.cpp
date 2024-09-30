#include <iostream>
using namespace std;

int main(){
    int prices[] = {1,2};

    // count number of elements
    int no_of_elements = sizeof(prices) / sizeof(prices[0]) ;

    // to get min price 
    int min_price = prices[0];
    int index_for_min_price = 0;
    for (int i = 0; i < no_of_elements; i++)
    {
        if (prices[i] < min_price)
        {
            min_price = prices[i];
            index_for_min_price = i;
        }        
    }

    // to get max price after the day of buy
    int max_price = min_price;
    for (int i = index_for_min_price; i < no_of_elements; i++)
    {
        if (prices[i] > max_price)
        {
            max_price = prices[i];
        }   
    }
    
    // getting profit
    int profit = max_price - min_price;
    cout << "Your profit is: " << profit << endl;

    return 0;
    
}