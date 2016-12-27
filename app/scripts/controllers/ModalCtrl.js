(function() {
    function ModalCtrl(Room, $uibModalInstance) {
        this.cancel = function () {
            $uibModalInstance.dismiss();
        };
        
        this.submit = function () {
            Room.add(this.newRoom);
            $uibModalInstance.close();
        };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();