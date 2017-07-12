let algo = {
    templateUrl: 'js/components/login/algo.html',
    controller: ['UsersService', '$state', function (UsersService, $state) {
        'use strict'
        let $ctrl = this
        angular.extend(this, {
            $onInit() {

                var arrayFriends = ["Ryan", "Kieran", "Mark"];
                this.amie = "";
                for (var i = 0; i < arrayFriends.length; i++) {
                   if(arrayFriends[i].length <= 4)
                    {
                        this.amie += ''+ arrayFriends[i] + ' '
                    }
                }
            }
        })
    }]
}

export default algo
