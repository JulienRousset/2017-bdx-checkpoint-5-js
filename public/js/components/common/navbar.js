let navbar = {
    templateUrl: 'js/components/common/navbar.html',
    controller: ['UsersService', '$state', '$interval', function (UsersService, $state, $interval) {
        'use strict'
        angular.extend(this, {

            $onInit() {
                self = this;
                UsersService.getCurrent().then((user) => {
                    this.user = user
                }).catch((err) => {

                })
                $interval(function () {
                    self.clock = moment().toDate();
                }, 1);
            },

            disconnect() {
                UsersService.disconnect().then(() => {
                    Materialize.toast('Disconnected', 4000, 'toast-warning')
                    this.user = null
                    $state.reload()
                })
            }

        })
    }]
}

export default navbar
