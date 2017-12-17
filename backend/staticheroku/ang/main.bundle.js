webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var games_service_1 = __webpack_require__("../../../../../src/app/games.service.ts");
var AppComponent = (function () {
    function AppComponent(userService) {
        this.userService = userService;
        this.showMoves = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.userActivated.subscribe(function (clicked) {
            if (clicked == true) {
                _this.showMoves = false;
            }
            else {
                _this.showMoves = true;
            }
        });
    };
    AppComponent.prototype.easy = function () {
        this.userService.difficulty = this.userService.easy;
        this.userService.setNewValues();
    };
    AppComponent.prototype.medium = function () {
        this.userService.difficulty = this.userService.medium;
        this.userService.setNewValues();
    };
    AppComponent.prototype.hard = function () {
        this.userService.difficulty = this.userService.hard;
        this.userService.setNewValues();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        styles: ['body { background: -webkit-linear-gradient(#917c4d, #ffffff);}'],
        template: " \n    \t\t<body>\n\n\t\t\t\t<nav class=\"navbar navbar-inverse\">\n\t\t\t\t  <div class=\"container-fluid\">\n\t\t\t\t    <div class=\"navbar-header\">\n\t\t\t\t      <a class=\"navbar-brand\" href=\"\">VisChess</a>\n\t\t\t\t    </div>\n\t\t\t\t    <ul class=\"nav navbar-nav\">\n\t\t\t\t      <li><a (click)=\"easy()\">EASY</a></li>\n\t\t\t\t      <li><a (click)=\"medium()\">MEDIUM</a></li>\n\t\t\t\t      <li><a (click)=\"hard()\">HARD</a></li>\n\t\t\t\t    </ul>\n\t\t\t\t  </div>\n\t\t\t\t</nav>\n\n\t\t\t\n    \t\t\t<div>\n\n\t    \t\t\t<div class=\"col-md-4\">\n\t    \t\t\t\t<h1> Instructions </h1>\n\t    \t\t\t\t<h4> 1. Pick a difficulty </h4>\n\t    \t\t\t\t<h4> 2. Visualize the moves and the resulting end position </h4>\n\t    \t\t\t\t<h4> 3. Press continue and put the resulting position on the board </h4>\n\t    \t\t\t\t<h4> Make it extra spicey by pressing the berserk button to start from a clear board </h4>\n\t    \t\t\t\t<h4> You will be asked to try again if you fail! </h4> \n\n\n\t    \t\t\t</div>\n\t    \t\t\t<div class=\"col-md-5\" >\n\t    \t\t\t\t<boardeditor [style.width]=\"'100%'\" [style.height]=\"'100%'\" ></boardeditor>\n\t    \t\t\n\t    \t\t\t</div>\n\t    \t\t\t<div *ngIf = \"showMoves\"class=\"col-md-3\" >\n\t    \t\t\t\t<chessmoves [pgn] = \"this.userService.endPgn\" > </chessmoves>\n\t    \t\t\t</div>\n\n\n\t    \t\n\t\n\n\t    \t\t\t\n\t    \t\t</div>\n\t    \t</body>\n\n\n\t  \n\t    \t\t\n\n                ",
        encapsulation: core_1.ViewEncapsulation.None,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof games_service_1.GamesService !== "undefined" && games_service_1.GamesService) === "function" && _a || Object])
], AppComponent);
exports.AppComponent = AppComponent;
var _a;
//`<boardeditor [style.width]="'100%'" [style.height]="'100%'"></boardeditor>` 
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
// third party imports
var dropdown_1 = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
var carousel_1 = __webpack_require__("../../../../ngx-bootstrap/carousel/index.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var app_routing_1 = __webpack_require__("../../../../../src/app/app.routing.ts");
var safe_pipe_1 = __webpack_require__("../../../../../src/app/utility/safe.pipe.ts");
var boardeditor_component_1 = __webpack_require__("../../../../../src/app/boardeditor.component.ts");
var chessground_piece_component_1 = __webpack_require__("../../../../../src/app/chessground-piece.component.ts");
var glyphbutton_component_1 = __webpack_require__("../../../../../src/app/glyphbutton.component.ts");
var pgninputtext_component_1 = __webpack_require__("../../../../../src/app/pgninputtext.component.ts");
var pgnreplay_component_1 = __webpack_require__("../../../../../src/app/pgnreplay.component.ts");
var pgnviewer_component_1 = __webpack_require__("../../../../../src/app/pgnviewer.component.ts");
var sparepieces_component_1 = __webpack_require__("../../../../../src/app/sparepieces.component.ts");
var viewer_buttonbar_component_1 = __webpack_require__("../../../../../src/app/viewer-buttonbar.component.ts");
var chessground_component_1 = __webpack_require__("../../../../../src/app/chessground.component.ts");
var piece_component_1 = __webpack_require__("../../../../../src/app/piece.component.ts");
var chessmoves_component_1 = __webpack_require__("../../../../../src/app/chessmoves.component.ts");
var games_service_1 = __webpack_require__("../../../../../src/app/games.service.ts");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            safe_pipe_1.SafePipe,
            chessground_component_1.ChessGroundComponent,
            boardeditor_component_1.BoardEditorComponent,
            chessground_piece_component_1.ChessGroundPieceComponent,
            glyphbutton_component_1.GlyphButtonComponent,
            pgninputtext_component_1.PgnInputTextComponent,
            pgnreplay_component_1.PgnReplayComponent,
            pgnviewer_component_1.PgnViewerComponent,
            sparepieces_component_1.SparePiecesComponent,
            viewer_buttonbar_component_1.ViewerButtonBarComponent,
            piece_component_1.pieceComponent,
            chessmoves_component_1.chessmovesComponent,
        ],
        imports: [
            // ngx-bootstrap
            dropdown_1.BsDropdownModule.forRoot(),
            carousel_1.CarouselModule.forRoot(),
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_1.AppRoutingModule,
        ],
        providers: [games_service_1.GamesService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// https://angular.io/docs/ts/latest/guide/router.html
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var appRoutes = [];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(appRoutes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/boardeditor.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var chessground_service_1 = __webpack_require__("../../../../../src/app/chessground.service.ts");
var games_service_1 = __webpack_require__("../../../../../src/app/games.service.ts");
var chessjs_service_1 = __webpack_require__("../../../../../src/app/chessjs.service.ts");
var _ = __webpack_require__("../../../../lodash/lodash.js");
var util = __webpack_require__("../../../../chessground/src/main.js").util;
var drag = __webpack_require__("../../../../chessground/src/main.js").drag;
var api = __webpack_require__("../../../../chessground/src/main.js").api;
var BoardEditorComponent = (function () {
    function BoardEditorComponent(cgctrl, userService, chessjs) {
        this.cgctrl = cgctrl;
        this.userService = userService;
        this.chessjs = chessjs;
        this.orientation = 'white';
        this.pieces = "merida";
        this.boardwidth = '75vh';
        this.boardheight = '75vh';
        this.sparepieceWidth = '50';
        this.sparepieceHeight = '50';
        this.spareupcolour = 'black';
        this.sparedowncolour = 'white';
        this.continue = false;
        this.success = false;
        this.viewOnly = true;
        this.status = "Continue";
        this.submit = "Submit";
        this.berserkState = false;
    }
    BoardEditorComponent.prototype.onMouseDownOnPiece = function (event) {
        var piece = { role: event.role, color: event.color };
        this.handoverSparePiece(event.event, piece);
    };
    BoardEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.req = this.userService.list().subscribe(function (data) {
            _this.GameList = data;
        });
    };
    BoardEditorComponent.prototype.berserk = function () {
        if (this.berserkState == false) {
            this.berserkState = true;
            this.ground.set({ fen: "8/8/8/8/8/8/8/8 w - -" });
        }
        else {
            this.berserkState = false;
            this.ground.set({ fen: this.userService.initialFen });
        }
    };
    BoardEditorComponent.prototype.ngOnDestroy = function () {
        this.req.unsubscribe();
    };
    BoardEditorComponent.prototype.ngAfterViewInit = function () {
        // Component views are initialized
        this.ground = this.cgctrl.getGround();
        var clientWidth = this.cgctrl.getWidthInPx();
        var clientHeight = this.cgctrl.getHeightInPx();
        if (this.orientation == 'black') {
            this.spareupcolour = 'white';
            this.sparedowncolour = 'black';
        }
        this.logic = this.chessjs.getNewInstance();
        this.logic.load_pgn(this.userService.end);
        this.pgnEnd = this.logic.fen();
    };
    BoardEditorComponent.prototype.setFen = function () {
        this.logic.load_pgn(this.userService.end);
        this.pgnEnd = this.logic.fen();
    };
    BoardEditorComponent.prototype.onSubmit = function () {
        this.setFen();
        if (this.pgnEnd.includes(this.ground.getFen())) {
            this.success = true;
            this.submit = "SUCCESS";
        }
        else {
            this.continue = false;
            this.status = "Try again!";
            this.ground.set({ fen: this.userService.initialFen });
            this.ground.set({ movable: { free: false } });
            this.userService.userActivated.next(false);
        }
    };
    BoardEditorComponent.prototype.onContinue = function () {
        this.userService.pgn = this.GameList[this.userService.getNewGame()].pgn;
        this.userService.setNewValues();
        this.submit = "Submit";
        this.logic = this.chessjs.getNewInstance();
        this.logic.load_pgn(this.userService.initialPgn);
        this.userService.initialFen = this.logic.fen();
        this.logic.load_pgn(this.userService.end);
        this.pgnEnd = this.logic.fen();
        this.userService.userActivated.next(false);
        this.continue = false;
        this.success = false;
        this.status = "Continue";
        this.ground.set({ fen: this.userService.initialFen });
        this.ground.set({ movable: { free: false } });
        this.problem();
    };
    BoardEditorComponent.prototype.problem = function () {
        this.ground.set({ fen: this.userService.initialFen });
    };
    BoardEditorComponent.prototype.continueNext = function () {
        this.continue = true;
        this.userService.move = true;
        this.ground.set({ movable: { free: true } });
        this.userService.userActivated.next(true);
    };
    BoardEditorComponent.prototype.onChange = function () {
    };
    BoardEditorComponent.prototype.changeOrientation = function () {
        this.ground.toggleOrientation();
    };
    BoardEditorComponent.prototype.findFirstEmptySquare = function (k) {
        return !this.ground.data.pieces[k];
    };
    ;
    BoardEditorComponent.prototype.handoverSparePiece = function (event, piece) {
        var pieces = this.ground.data.pieces;
        var key = _.find(util.allKeys, this.findFirstEmptySquare.bind(this));
        this.dragKey = key;
        var coords = util.key2pos(this.ground.data.orientation === 'white' ? key : util.invertKey(key));
        var obj = {};
        obj[key] = piece;
        this.ground.setPieces(obj);
        //this.ground.toggleOrientation(obj);
        var bounds = this.ground.data.bounds();
        //assume chessboard is 8*8 squares
        var squareSize = bounds.width / 8;
        var rel = [
            (coords[0] - 1) * squareSize + bounds.left,
            (8 - coords[1]) * squareSize + bounds.top
        ];
        this.ground.data.draggable.current = {
            orig: key,
            piece: piece.color + piece.role,
            rel: rel,
            epos: [event.clientX, event.clientY],
            pos: [event.clientX - rel[0], event.clientY - rel[1]],
            dec: [-squareSize / 2, -squareSize / 2],
            bounds: bounds,
            started: true
        };
        drag.processDrag(this.ground.data);
    };
    return BoardEditorComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BoardEditorComponent.prototype, "orientation", void 0);
BoardEditorComponent = __decorate([
    core_1.Component({
        selector: 'boardeditor',
        template: " \n            <body [style.background] = \"success ? 'green' : 'none'\">\n             <div class = \"container\">\n                <sparepieces  (mousedownonpiece)=\"onMouseDownOnPiece($event)\" \n                  [color]=\"spareupcolour\"\n                  [width]=\"sparepieceWidth\"\n                  [height]=\"sparepieceHeight\"\n                >\n                </sparepieces>\n                  <chessground  [width]=\"boardwidth\" [height]=\"boardheight\" [pieces]=\"pieces\" [orientation]=\"orientation\"></chessground>\n                 \n                <sparepieces \n              \n                  (mousedownonpiece)=\"onMouseDownOnPiece($event)\" \n                  [color]=\"sparedowncolour\" \n                  [width]=\"sparepieceWidth\" \n                  [height]=\"sparepieceHeight\"\n                >\n                </sparepieces>\n            </div>\n            <button *ngIf = \"success\" type=\"button\" class=\"btn btn-success btn-lg btn-block\" (click)=\"onContinue()\">Next Game</button>\n\n            </body>\n\n\n            <button *ngIf = \"!continue\" type=\"button\" class=\"btn btn-primary btn-lg btn-block\" (click)=\"continueNext()\">{{status}} </button>\n          \n            <button *ngIf = \"continue\" type=\"button\" class=\"btn btn-primary btn-lg btn-block\" (click)=\"onSubmit()\">{{submit}}<h1><span *ngIf = \"success\" class=\"glyphicon glyphicon-ok\"></span></h1></button>\n\n            <button type=\"button\" class=\"btn btn-warning\" (click)=\"changeOrientation()\"> Flip </button>\n            <button type=\"button\" class=\"btn btn-warning\" (click)=\"berserk()\"> Berserk </button>\n          \n            ",
        styles: ['.extraclass {background-color: green;}'],
        providers: [chessground_service_1.ChessGroundService, chessjs_service_1.ChessJsService],
        encapsulation: core_1.ViewEncapsulation.None,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof chessground_service_1.ChessGroundService !== "undefined" && chessground_service_1.ChessGroundService) === "function" && _a || Object, typeof (_b = typeof games_service_1.GamesService !== "undefined" && games_service_1.GamesService) === "function" && _b || Object, typeof (_c = typeof chessjs_service_1.ChessJsService !== "undefined" && chessjs_service_1.ChessJsService) === "function" && _c || Object])
], BoardEditorComponent);
exports.BoardEditorComponent = BoardEditorComponent;
var _a, _b, _c;
//# sourceMappingURL=boardeditor.component.js.map

/***/ }),

/***/ "../../../../../src/app/chessground-piece.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var ChessGroundPieceComponent = (function () {
    function ChessGroundPieceComponent() {
        this.pieces = 'merida';
        this.piece = '';
        this.color = 'white';
        this.is3d = false;
    }
    return ChessGroundPieceComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ChessGroundPieceComponent.prototype, "width", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ChessGroundPieceComponent.prototype, "height", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ChessGroundPieceComponent.prototype, "pieces", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ChessGroundPieceComponent.prototype, "piece", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ChessGroundPieceComponent.prototype, "color", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], ChessGroundPieceComponent.prototype, "is3d", void 0);
ChessGroundPieceComponent = __decorate([
    core_1.Component({
        selector: 'chessground-piece',
        template: "<div  [ngClass]=\"[pieces]\"  [style.width.px]=\"height\" [style.height.px]=\"height\" class=\"chessgroundpiece\">\n                <piece  [style.width.px]=\"height\" [style.height.px]=\"height\" [ngClass]=\"[color,piece]\" class=\"chessgroundpiece\"></piece>\n              </div>",
    }),
    __metadata("design:paramtypes", [])
], ChessGroundPieceComponent);
exports.ChessGroundPieceComponent = ChessGroundPieceComponent;
//# sourceMappingURL=chessground-piece.component.js.map

/***/ }),

/***/ "../../../../../src/app/chessground.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var chessground_service_1 = __webpack_require__("../../../../../src/app/chessground.service.ts");
var games_service_1 = __webpack_require__("../../../../../src/app/games.service.ts");
var chessjs_service_1 = __webpack_require__("../../../../../src/app/chessjs.service.ts");
var util = __webpack_require__("../../../../chessground/src/main.js").util;
var drag = __webpack_require__("../../../../chessground/src/main.js").drag;
var api = __webpack_require__("../../../../chessground/src/main.js").fen;
var ChessGroundComponent = (function () {
    function ChessGroundComponent(cgctrl, userService, chessjs) {
        this.cgctrl = cgctrl;
        this.userService = userService;
        this.chessjs = chessjs;
        this.uuid = __webpack_require__("../../../../uuid/uuid.js");
        this.pieces = 'stuanton';
        this.board = 'wood';
        this.muuid = this.uuid.v4();
        this.width = '100%';
        this.height = '100%';
        this.orientation = 'white';
        this.change = new core_1.EventEmitter();
        this.move = new core_1.EventEmitter();
        this.select = new core_1.EventEmitter();
    }
    ChessGroundComponent.prototype.dragNewPiece = function () {
    };
    ChessGroundComponent.prototype.selectSquare = function (key, force) {
        console.log(key);
    };
    ChessGroundComponent.prototype.onChangeDrawable = function (shapes) {
        console.log(shapes);
    };
    ChessGroundComponent.prototype.onMove = function (orig, dest, capturedPiece) {
    };
    ChessGroundComponent.prototype.findFirstEmptySquare = function (k) {
        return !this.ground.data.pieces[k];
    };
    ;
    ChessGroundComponent.prototype.onSelect = function (key) {
        console.log(key);
    };
    ChessGroundComponent.prototype.newPiece = function (piece, key) {
    };
    ChessGroundComponent.prototype.ondropNewPiece = function (piece, key) {
        console.log(key);
    };
    ChessGroundComponent.prototype.ngAfterViewInit = function () {
        this.logic = this.chessjs.getNewInstance();
        this.logic.load_pgn(this.userService.initialPgn);
        this.userService.initialFen = this.logic.fen();
        this.fen = this.userService.initialFen;
        this.defaultOptions = {
            orientation: this.orientation,
            fen: this.fen,
            coordinates: true,
            draggable: {
                enabled: true,
                distance: 3,
                squareTarget: true,
                centerPiece: true,
                showGhost: true,
            },
            drawable: {
                enabled: true,
                onChange: this.onChangeDrawable
                // enable SVG circle and arrow drawing on the board
            },
            events: {
                change: this.onChange,
                // called after a piece has been moved.
                // capturedPiece is null or like {color: 'white', 'role': 'queen'}
                dropNewPiece: this.ondropNewPiece,
                move: this.onMove,
                select: this.onSelect // called when a square is selected
            },
            movable: {
                free: this.userService.move,
                color: "both",
                dropOff: "trash" // when a piece is dropped outside the board. "revert" | "trash"
            }
        };
        this.ground = this.cgctrl.init(this.muuid, this.defaultOptions);
        if (this.options) {
            this.ground.set(this.options);
        }
    };
    ;
    ChessGroundComponent.prototype.onChange = function () {
    };
    return ChessGroundComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ChessGroundComponent.prototype, "pieces", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ChessGroundComponent.prototype, "board", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ChessGroundComponent.prototype, "muuid", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ChessGroundComponent.prototype, "width", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ChessGroundComponent.prototype, "height", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ChessGroundComponent.prototype, "options", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ChessGroundComponent.prototype, "orientation", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], ChessGroundComponent.prototype, "change", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
], ChessGroundComponent.prototype, "move", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_c = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _c || Object)
], ChessGroundComponent.prototype, "select", void 0);
ChessGroundComponent = __decorate([
    core_1.Component({
        selector: 'chessground',
        template: "\n                 \n                 <div [id]=\"muuid\"  [style.width]=\"width\" [style.height]=\"height\" [ngClass]=\"[pieces,board]\">\n\n\n                 </div>\n              "
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof chessground_service_1.ChessGroundService !== "undefined" && chessground_service_1.ChessGroundService) === "function" && _d || Object, typeof (_e = typeof games_service_1.GamesService !== "undefined" && games_service_1.GamesService) === "function" && _e || Object, typeof (_f = typeof chessjs_service_1.ChessJsService !== "undefined" && chessjs_service_1.ChessJsService) === "function" && _f || Object])
], ChessGroundComponent);
exports.ChessGroundComponent = ChessGroundComponent;
var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=chessground.component.js.map

/***/ }),

/***/ "../../../../../src/app/chessground.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var ChessGroundService = (function () {
    function ChessGroundService() {
        this.Chessground = __webpack_require__("../../../../chessground/src/main.js");
    }
    ChessGroundService.prototype.init = function (id, options) {
        this.id = id;
        this.ground = this.Chessground(document.getElementById(id), options);
        return this.ground;
    };
    ChessGroundService.prototype.set = function (options) {
        this.ground.set(options);
    };
    ChessGroundService.prototype.getGround = function () {
        return this.ground;
    };
    ChessGroundService.prototype.getId = function () {
        return this.id;
    };
    ChessGroundService.prototype.getWidthInPx = function () {
        return document.getElementById(this.id).clientWidth;
    };
    ChessGroundService.prototype.getHeightInPx = function () {
        return document.getElementById(this.id).clientHeight;
    };
    ChessGroundService.prototype.getFen = function () {
    };
    return ChessGroundService;
}());
ChessGroundService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ChessGroundService);
exports.ChessGroundService = ChessGroundService;
//# sourceMappingURL=chessground.service.js.map

/***/ }),

/***/ "../../../../../src/app/chessjs.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var Chess = __webpack_require__("../../../../../src/libs/chess.js").Chess;
var ChessJsService = (function () {
    function ChessJsService() {
    }
    ChessJsService.prototype.initSharedInstance = function () {
        this.chess = new Chess();
    };
    ChessJsService.prototype.getNewInstance = function () {
        return new Chess();
    };
    ChessJsService.prototype.getSharedInstance = function () {
        return this.chess;
    };
    return ChessJsService;
}());
ChessJsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ChessJsService);
exports.ChessJsService = ChessJsService;
//# sourceMappingURL=chessjs.service.js.map

/***/ }),

/***/ "../../../../../src/app/chessmoves.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\n  border-collapse: separate;\n  border-spacing: 0 5px;\n}\n\nthead th {\n  background-color: #006DCC;\n  color: white;\n}\n\ntbody td {\n  background-color: #EEEEEE;\n}\n\ntr td:first-child,\ntr th:first-child {\n  border-top-left-radius: 6px;\n  border-bottom-left-radius: 6px;\n}\n\ntr td:last-child,\ntr th:last-child {\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chessmoves.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var games_service_1 = __webpack_require__("../../../../../src/app/games.service.ts");
var chessground_service_1 = __webpack_require__("../../../../../src/app/chessground.service.ts");
var chessmovesComponent = (function () {
    function chessmovesComponent(userService) {
        this.userService = userService;
        this.pgn = this.userService.endPgn;
        this.pgnArray = this.pgn.split(/[0-9]+[.]/).filter(function (x) { return x != ""; });
    }
    chessmovesComponent.prototype.ngOnChanges = function () {
        this.pgnArray = this.pgn.split(/[0-9]+[.]/).filter(function (x) { return x != ""; });
    };
    chessmovesComponent.prototype.ngOnInit = function () { };
    return chessmovesComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], chessmovesComponent.prototype, "pgn", void 0);
chessmovesComponent = __decorate([
    core_1.Component({
        selector: 'chessmoves',
        template: " \n\n    \t\t\t<div class=\"col-md-6\">\n                   \n\t    \t\t\t<table class=\"table table-dark\">\n\n\t    \t\t\t    <thead>\n                            <tr>\n\n                            <th><h3>Moves</h3></th> \n                            </tr>\n                        </thead>\n\n\t\t\t\t\t  <tbody>\n                    \t<tr *ngFor='let move of pgnArray' > \n                             <td><h4>{{move}} </h4></td>\n\n                \n                        </tr>\n\t\t\t\t\t  </tbody>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\n\t\n               \n\n\n                ",
        styles: [__webpack_require__("../../../../../src/app/chessmoves.component.css")],
        providers: [chessground_service_1.ChessGroundService],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof games_service_1.GamesService !== "undefined" && games_service_1.GamesService) === "function" && _a || Object])
], chessmovesComponent);
exports.chessmovesComponent = chessmovesComponent;
var _a;
//# sourceMappingURL=chessmoves.component.js.map

/***/ }),

/***/ "../../../../../src/app/games.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var Subject_1 = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var endpoint = '/api/games/';
var GamesService = (function () {
    function GamesService(http) {
        this.http = http;
        this.currentID = Math.floor(Math.random() * 600) + 1;
        this.easy = "13";
        this.medium = "15";
        this.hard = "17";
        this.default = this.easy;
        this.difficulty = this.default;
        this.pgn = "1. d4 Nf6 2. Bg5 Ne4 3. Bf4 c5 4. f3 Nf6 5. dxc5 b6 6. Nc3 bxc5 7. e4 Nc6 8. Qd2 e5 9. Bg5 Be7 10. Bb5 Nd4 11. Bc4 Rb8 12. b3 h6 13. Be3 d6 14. Nge2 Be6 15. Bxe6 fxe6 16. O-O O-O 17. Ng3 Qe8 18. Na4 g5 19. Nb2 Qg6 20. Nc4 Kh7 21. Rad1 Rf7 22. Rf2 Rg8 23. c3 Nc6 24. b4 g4 25. b5 Nb8 26. Qe2 h5 27. fxg4 h4 28. Nf1 Nxe4 29. Rxf7+ Qxf7 30. Qc2 Qg6 31. Nfd2 Nf6 32. Qxg6+ Kxg6 33. h3 Nbd7 34. Nf3 Nd5 35. Bf2 Nxc3 36. Rd3 Ne2+ 37. Kf1 Nd4 38. Bxh4 Kf7 39. Bxe7 Kxe7 40. a4 Nb6 41. Nfd2 e4 42. Rc3 d5 43. Ne5 c4 44. a5 Nxb5 45. Rc1 Nd7 46. Nexc4 dxc4 47. Rxc4 e3 48. Ne4 Nd6 49. Nxd6 Kxd6 50. Ke2 Rg5 51. Ra4 Re5 52. Ra3 Nf6 53. Rxe3 Rxa5 54. Kf3 Nd5 55. Rd3 e5 56. g5 Ra4 57. Rd2 e4+ 58. Ke2 Ke5 59. g3 Ra3 0-1";
        this.initialPgn = this.pgn.split('10')[0];
        this.endPgn = "10" + this.pgn.split("10")[1].split(this.difficulty)[0];
        this.end = this.pgn.split(this.difficulty)[0];
        this.move = false;
        this.userActivated = new Subject_1.Subject();
    }
    GamesService.prototype.list = function () {
        return this.http.get(endpoint)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    GamesService.prototype.handleError = function (error, caught) {
        console.log(error, caught);
    };
    GamesService.prototype.ngOnInit = function () {
    };
    GamesService.prototype.ngOnDestroy = function () {
    };
    GamesService.prototype.getNewGame = function () {
        this.currentID += 1;
        if (this.currentID > 999) {
            this.currentID = 1;
        }
        return this.currentID;
    };
    GamesService.prototype.setNewValues = function () {
        this.initialPgn = this.pgn.split('10')[0];
        this.endPgn = "10" + this.pgn.split("10")[1].split(this.difficulty)[0];
        this.end = this.pgn.split(this.difficulty)[0];
    };
    return GamesService;
}());
GamesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], GamesService);
exports.GamesService = GamesService;
var _a;
//# sourceMappingURL=games.service.js.map

/***/ }),

/***/ "../../../../../src/app/glyphbutton.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var GlyphButtonComponent = (function () {
    function GlyphButtonComponent() {
        this.baseclass = "glyphicon";
        this.prestring = "glyphicon-";
        this.iconclass = "";
        this.name = "glass";
        this.width = "50px";
        this.height = "50px";
        this.fontsize = "200%";
        this.innerclick = new core_1.EventEmitter();
    }
    GlyphButtonComponent.prototype.ngOnInit = function () {
        this.iconclass = this.prestring + this.name;
    };
    GlyphButtonComponent.prototype.onClick = function ($event) {
        this.innerclick.emit({ name: this.name });
    };
    return GlyphButtonComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], GlyphButtonComponent.prototype, "name", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], GlyphButtonComponent.prototype, "width", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], GlyphButtonComponent.prototype, "height", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], GlyphButtonComponent.prototype, "fontsize", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], GlyphButtonComponent.prototype, "innerclick", void 0);
GlyphButtonComponent = __decorate([
    core_1.Component({
        selector: 'glyphbutton',
        styles: [],
        template: "\n             <button  (click)=\"onClick($event)\" [style.width]=\"width\" [style.height]=\"height\"><i [style.font-size]=\"fontsize\" class=\"glyphicon\" [ngClass]=\"[iconclass]\"></i></button>",
    })
], GlyphButtonComponent);
exports.GlyphButtonComponent = GlyphButtonComponent;
var _a;
//# sourceMappingURL=glyphbutton.component.js.map

/***/ }),

/***/ "../../../../../src/app/pgn.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var PgnService = (function () {
    function PgnService() {
    }
    PgnService.prototype.getInstance = function () {
        return this;
    };
    PgnService.prototype.cleanUpPgn = function (pgn) {
        //move string to array
        var arrayOfLines = pgn.match(/[^\r\n]+/g);
        //remove leading and trailing whytespace
        for (var i = 0; i < arrayOfLines.length; i++) {
            arrayOfLines[i] = arrayOfLines[i].trim();
        }
        //remove empty lines from array
        arrayOfLines = arrayOfLines.filter(function (v) { return v != ''; });
        var result = arrayOfLines.join('\n');
        return result;
    };
    PgnService.prototype.getMovesArray = function () {
    };
    return PgnService;
}());
PgnService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], PgnService);
exports.PgnService = PgnService;
//# sourceMappingURL=pgn.service.js.map

/***/ }),

/***/ "../../../../../src/app/pgninputtext.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var PgnInputTextComponent = (function () {
    function PgnInputTextComponent() {
        this.pgnsubmit = new core_1.EventEmitter();
        this.showButton = false;
    }
    PgnInputTextComponent.prototype.onPgnSubmit = function (value) {
        this.pgnsubmit.emit({ pgn: value });
    };
    return PgnInputTextComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], PgnInputTextComponent.prototype, "pgnsubmit", void 0);
PgnInputTextComponent = __decorate([
    core_1.Component({
        selector: 'pgninputtext',
        template: "<div class=\"pgninputtextcontainer\"> \n      <textarea class=\"pgntextarea\" #pgntextarea spellcheck=\"false\" >\n       [Event \"IBM Kasparov vs. Deep Blue Rematch\"]\n       [Site \"New York, NY USA\"]\n       [Date \"1997.05.11\"]\n       [Round \"6\"]\n       [White \"Deep Blue\"]\n       [Black \"Kasparov, Garry\"]\n       [Opening \"Caro-Kann: 4...Nd7\"]\n       [ECO \"B17\"]\n       [Result \"1-0\"]\n       1.e4 c6 2.d4 d5 3.Nc3 dxe4 4.Nxe4 Nd7 5.Ng5 Ngf6 6.Bd3 e6 7.N1f3 h6\n       8.Nxe6 Qe7 9.O-O fxe6 10.Bg6+ Kd8 \n       11.Bf4 b5 12.a4 Bb7 13.Re1 Nd5 14.Bg3 Kc8 15.axb5 cxb5 16.Qd3 Bc6 \n       17.Bf5 exf5 18.Rxe7 Bxe7 19.c4 1-0\n     </textarea> \n               <glyphbutton  *ngIf=\"showButton\" [name]=\"'plus'\" (click)=\"onPgnSubmit(pgntextarea.value)\"></glyphbutton> \n                </div>",
    })
], PgnInputTextComponent);
exports.PgnInputTextComponent = PgnInputTextComponent;
var _a;
//# sourceMappingURL=pgninputtext.component.js.map

/***/ }),

/***/ "../../../../../src/app/pgnreplay.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var PgnReplayComponent = (function () {
    function PgnReplayComponent() {
        this.pgnsubmit = new core_1.EventEmitter();
    }
    PgnReplayComponent.prototype.onButtonBarDo = function (event) {
    };
    PgnReplayComponent.prototype.onPgnSubmit = function (event) {
        this.pgnsubmit.emit({ pgn: event.pgn });
    };
    return PgnReplayComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], PgnReplayComponent.prototype, "pgnsubmit", void 0);
PgnReplayComponent = __decorate([
    core_1.Component({
        selector: 'pgnreplay',
        template: " <div class=\"pgnreplaycontainer\">\n                <viewer-buttonbar (do)=\"onButtonBarDo($event)\" ></viewer-buttonbar>\n                <pgninputtext (pgnsubmit)=\"onPgnSubmit($event)\"></pgninputtext>\n                </div>",
    })
], PgnReplayComponent);
exports.PgnReplayComponent = PgnReplayComponent;
var _a;
//# sourceMappingURL=pgnreplay.component.js.map

/***/ }),

/***/ "../../../../../src/app/pgnviewer.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var chessground_service_1 = __webpack_require__("../../../../../src/app/chessground.service.ts");
var chessjs_service_1 = __webpack_require__("../../../../../src/app/chessjs.service.ts");
var scalachessjs_service_1 = __webpack_require__("../../../../../src/app/scalachessjs.service.ts");
var pgn_service_1 = __webpack_require__("../../../../../src/app/pgn.service.ts");
var PgnViewerComponent = (function () {
    function PgnViewerComponent(cgctrl, chessjsservice, scalachessjsservice, pgnservice) {
        this.cgctrl = cgctrl;
        this.chessjsservice = chessjsservice;
        this.scalachessjsservice = scalachessjsservice;
        this.pgnservice = pgnservice;
        this.pgn = "";
        this.boardwidth = '100vh';
        this.boardheight = '100vh';
        this.pieces = "merida";
        this.board = "chessground.light-wood-3d";
        this.orientation = "white";
        this.fen = '2r3k1/pp2Qpbp/4b1p1/3p4/3n1PP1/2N4P/Pq6/R2K1B1R';
        this.scalachessjssubscription = this.scalachessjsservice.getResponseEvent().subscribe(this.onTest);
    }
    PgnViewerComponent.prototype.onTest = function (e) {
        console.log(e);
    };
    PgnViewerComponent.prototype.onPgnSubmit = function (event) {
        var pgn = this.pgnservice.cleanUpPgn(event.pgn);
        this.scalachessjsservice.postReadPgn(pgn);
        //this.chessjs.load_pgn(pgn);
        //console.log(this.chessjs.history({ verbose: true }));
    };
    PgnViewerComponent.prototype.ngAfterViewInit = function () {
        this.chessjs = this.chessjsservice.getNewInstance();
    };
    PgnViewerComponent.prototype.onButtonBarDo = function (event) {
        console.log(event);
    };
    return PgnViewerComponent;
}());
PgnViewerComponent = __decorate([
    core_1.Component({
        selector: 'pgnviewer',
        template: " <h1> Welcome </h1>\n              <div class=\"pgnviewercontainer\">\n                  <chessground [width]=\"boardwidth\" [height]=\"boardheight\" [pieces]=\"pieces\" [orientation]=\"orientation\"></chessground>\n\n                 \n                </div>\n             ",
        providers: [chessground_service_1.ChessGroundService, chessjs_service_1.ChessJsService, scalachessjs_service_1.ScalaChessJsService, pgn_service_1.PgnService]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof chessground_service_1.ChessGroundService !== "undefined" && chessground_service_1.ChessGroundService) === "function" && _a || Object, typeof (_b = typeof chessjs_service_1.ChessJsService !== "undefined" && chessjs_service_1.ChessJsService) === "function" && _b || Object, typeof (_c = typeof scalachessjs_service_1.ScalaChessJsService !== "undefined" && scalachessjs_service_1.ScalaChessJsService) === "function" && _c || Object, typeof (_d = typeof pgn_service_1.PgnService !== "undefined" && pgn_service_1.PgnService) === "function" && _d || Object])
], PgnViewerComponent);
exports.PgnViewerComponent = PgnViewerComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=pgnviewer.component.js.map

/***/ }),

/***/ "../../../../../src/app/piece.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var pieceComponent = (function () {
    function pieceComponent() {
        this.pieces = 'merida';
        this.piece = '';
        this.color = 'white';
        this.is3d = false;
    }
    return pieceComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], pieceComponent.prototype, "width", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], pieceComponent.prototype, "height", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], pieceComponent.prototype, "pieces", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], pieceComponent.prototype, "piece", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], pieceComponent.prototype, "color", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], pieceComponent.prototype, "is3d", void 0);
pieceComponent = __decorate([
    core_1.Component({
        selector: 'piece',
        template: "\n             <div [style.width.px]=\"height\" [style.height.px]=\"height\" [ngClass]=\"[color,piece]\" class=\"chessgroundpiece\">\n             </div>",
    }),
    __metadata("design:paramtypes", [])
], pieceComponent);
exports.pieceComponent = pieceComponent;
//# sourceMappingURL=piece.component.js.map

/***/ }),

/***/ "../../../../../src/app/scalachessjs.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var ScalaChessJsService = (function () {
    function ScalaChessJsService() {
        this.responseevent = new core_1.EventEmitter();
        this.chessWorker = new Worker('../libs/scalachessjs-opt.js');
        this.chessWorker.addEventListener('message', this.onWorkerEvent.bind(this));
    }
    ScalaChessJsService.prototype.emitResponseEvent = function (data) {
        this.responseevent.emit({ data: data });
    };
    ScalaChessJsService.prototype.getResponseEvent = function () {
        return this.responseevent;
    };
    ScalaChessJsService.prototype.postReadPgn = function (pgn) {
        this.chessWorker.postMessage({
            topic: 'pgnRead',
            payload: {
                pgn: pgn
            }
        });
    };
    ScalaChessJsService.prototype.onWorkerEvent = function (e) {
        this.emitResponseEvent(e.data);
    };
    return ScalaChessJsService;
}());
ScalaChessJsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ScalaChessJsService);
exports.ScalaChessJsService = ScalaChessJsService;
//# sourceMappingURL=scalachessjs.service.js.map

/***/ }),

/***/ "../../../../../src/app/sparepieces.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var SparePiecesComponent = (function () {
    function SparePiecesComponent() {
        this.pieces = 'merida';
        this.color = 'white';
        this.is3d = false;
        this.mousedownonpiece = new core_1.EventEmitter();
    }
    SparePiecesComponent.prototype.onMouseDown = function (event, piecename) {
        var value = { event: event, role: piecename, color: this.color };
        this.mousedownonpiece.emit(value);
    };
    return SparePiecesComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], SparePiecesComponent.prototype, "width", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], SparePiecesComponent.prototype, "height", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SparePiecesComponent.prototype, "pieces", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SparePiecesComponent.prototype, "color", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SparePiecesComponent.prototype, "is3d", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], SparePiecesComponent.prototype, "mousedownonpiece", void 0);
SparePiecesComponent = __decorate([
    core_1.Component({
        selector: 'sparepieces',
        template: "<div class=\"sparepiecescontainer\" [style.width.px]=\"width\" [style.height.px]=\"height\" >\n                <chessground-piece (mousedown)=\"onMouseDown($event,'pawn')\" [color]=\"color\" [piece]=\"'pawn'\" [height]=\"height\" [width]=\"width\" ></chessground-piece>\n                <chessground-piece (mousedown)=\"onMouseDown($event,'bishop')\" [color]=\"color\" [piece]=\"'bishop'\" [height]=\"height\" [width]=\"height\" ></chessground-piece>\n                <chessground-piece (mousedown)=\"onMouseDown($event,'knight')\" [color]=\"color\" [piece]=\"'knight'\" [height]=\"height\" [width]=\"height\" ></chessground-piece>\n                <chessground-piece (mousedown)=\"onMouseDown($event,'rook')\" [color]=\"color\" [piece]=\"'rook'\" [height]=\"height\" [width]=\"height\" ></chessground-piece>\n                <chessground-piece (mousedown)=\"onMouseDown($event,'queen')\" [color]=\"color\" [piece]=\"'queen'\" [height]=\"height\" [width]=\"height\" ></chessground-piece>\n                <chessground-piece (mousedown)=\"onMouseDown($event,'king')\" [color]=\"color\" [piece]=\"'king'\" [height]=\"height\" [width]=\"height\" ></chessground-piece>                                    \n              </div>",
    }),
    __metadata("design:paramtypes", [])
], SparePiecesComponent);
exports.SparePiecesComponent = SparePiecesComponent;
var _a;
//# sourceMappingURL=sparepieces.component.js.map

/***/ }),

/***/ "../../../../../src/app/utility/safe.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var SafePipe = (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (value, args) {
        if (value) {
            return this.sanitizer.bypassSecurityTrustResourceUrl(value);
        }
    };
    return SafePipe;
}());
SafePipe = __decorate([
    core_1.Pipe({
        name: 'safe'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof platform_browser_1.DomSanitizer !== "undefined" && platform_browser_1.DomSanitizer) === "function" && _a || Object])
], SafePipe);
exports.SafePipe = SafePipe;
var _a;
//# sourceMappingURL=safe.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/viewer-buttonbar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var ViewerButtonBarComponent = (function () {
    function ViewerButtonBarComponent() {
        this.width = 300;
        this.height = 50;
        this.do = new core_1.EventEmitter();
    }
    ViewerButtonBarComponent.prototype.onClick = function (event, doval) {
        var value = { do: doval };
        this.do.emit(value);
    };
    return ViewerButtonBarComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ViewerButtonBarComponent.prototype, "width", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ViewerButtonBarComponent.prototype, "height", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
], ViewerButtonBarComponent.prototype, "do", void 0);
ViewerButtonBarComponent = __decorate([
    core_1.Component({
        selector: 'viewer-buttonbar',
        template: "<div [style.width.px]=\"width\" class=\"viewerbuttonbarcontainer\">\n                  <glyphbutton (click)=\"onClick($event,'sb')\" [name]=\"'step-backward'\"></glyphbutton>\n                  <glyphbutton (click)=\"onClick($event,'fb')\" [name]=\"'fast-backward'\"></glyphbutton>\n                  <glyphbutton (click)=\"onClick($event,'ff')\" [name]=\"'fast-forward'\"></glyphbutton>\n                  <glyphbutton (click)=\"onClick($event,'sf')\" [name]=\"'step-forward'\"></glyphbutton>\n                  <glyphbutton (click)=\"onClick($event,'p')\" [name]=\"'play'\"></glyphbutton>\n                  <glyphbutton (click)=\"onClick($event,'s')\" [name]=\"'stop'\"></glyphbutton>\n              </div>",
    })
], ViewerButtonBarComponent);
exports.ViewerButtonBarComponent = ViewerButtonBarComponent;
var _a;
//# sourceMappingURL=viewer-buttonbar.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/libs/chess.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chess", function() { return Chess; });

/*
 * Copyright (c) 2016, Jeff Hlywa (jhlywa@gmail.com)
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 *    this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 *
 *----------------------------------------------------------------------------*/

/* minified license below  */

/* @license
 * Copyright (c) 2016, Jeff Hlywa (jhlywa@gmail.com)
 * Released under the BSD license
 * https://github.com/jhlywa/chess.js/blob/master/LICENSE
 */

var Chess = function(fen) {

  /* jshint indent: false */

  var BLACK = 'b';
  var WHITE = 'w';

  var EMPTY = -1;

  var PAWN = 'p';
  var KNIGHT = 'n';
  var BISHOP = 'b';
  var ROOK = 'r';
  var QUEEN = 'q';
  var KING = 'k';

  var SYMBOLS = 'pnbrqkPNBRQK';

  var DEFAULT_POSITION = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

  var POSSIBLE_RESULTS = ['1-0', '0-1', '1/2-1/2', '*'];

  var PAWN_OFFSETS = {
    b: [16, 32, 17, 15],
    w: [-16, -32, -17, -15]
  };

  var PIECE_OFFSETS = {
    n: [-18, -33, -31, -14,  18, 33, 31,  14],
    b: [-17, -15,  17,  15],
    r: [-16,   1,  16,  -1],
    q: [-17, -16, -15,   1,  17, 16, 15,  -1],
    k: [-17, -16, -15,   1,  17, 16, 15,  -1]
  };

  var ATTACKS = [
    20, 0, 0, 0, 0, 0, 0, 24,  0, 0, 0, 0, 0, 0,20, 0,
     0,20, 0, 0, 0, 0, 0, 24,  0, 0, 0, 0, 0,20, 0, 0,
     0, 0,20, 0, 0, 0, 0, 24,  0, 0, 0, 0,20, 0, 0, 0,
     0, 0, 0,20, 0, 0, 0, 24,  0, 0, 0,20, 0, 0, 0, 0,
     0, 0, 0, 0,20, 0, 0, 24,  0, 0,20, 0, 0, 0, 0, 0,
     0, 0, 0, 0, 0,20, 2, 24,  2,20, 0, 0, 0, 0, 0, 0,
     0, 0, 0, 0, 0, 2,53, 56, 53, 2, 0, 0, 0, 0, 0, 0,
    24,24,24,24,24,24,56,  0, 56,24,24,24,24,24,24, 0,
     0, 0, 0, 0, 0, 2,53, 56, 53, 2, 0, 0, 0, 0, 0, 0,
     0, 0, 0, 0, 0,20, 2, 24,  2,20, 0, 0, 0, 0, 0, 0,
     0, 0, 0, 0,20, 0, 0, 24,  0, 0,20, 0, 0, 0, 0, 0,
     0, 0, 0,20, 0, 0, 0, 24,  0, 0, 0,20, 0, 0, 0, 0,
     0, 0,20, 0, 0, 0, 0, 24,  0, 0, 0, 0,20, 0, 0, 0,
     0,20, 0, 0, 0, 0, 0, 24,  0, 0, 0, 0, 0,20, 0, 0,
    20, 0, 0, 0, 0, 0, 0, 24,  0, 0, 0, 0, 0, 0,20
  ];

  var RAYS = [
     17,  0,  0,  0,  0,  0,  0, 16,  0,  0,  0,  0,  0,  0, 15, 0,
      0, 17,  0,  0,  0,  0,  0, 16,  0,  0,  0,  0,  0, 15,  0, 0,
      0,  0, 17,  0,  0,  0,  0, 16,  0,  0,  0,  0, 15,  0,  0, 0,
      0,  0,  0, 17,  0,  0,  0, 16,  0,  0,  0, 15,  0,  0,  0, 0,
      0,  0,  0,  0, 17,  0,  0, 16,  0,  0, 15,  0,  0,  0,  0, 0,
      0,  0,  0,  0,  0, 17,  0, 16,  0, 15,  0,  0,  0,  0,  0, 0,
      0,  0,  0,  0,  0,  0, 17, 16, 15,  0,  0,  0,  0,  0,  0, 0,
      1,  1,  1,  1,  1,  1,  1,  0, -1, -1,  -1,-1, -1, -1, -1, 0,
      0,  0,  0,  0,  0,  0,-15,-16,-17,  0,  0,  0,  0,  0,  0, 0,
      0,  0,  0,  0,  0,-15,  0,-16,  0,-17,  0,  0,  0,  0,  0, 0,
      0,  0,  0,  0,-15,  0,  0,-16,  0,  0,-17,  0,  0,  0,  0, 0,
      0,  0,  0,-15,  0,  0,  0,-16,  0,  0,  0,-17,  0,  0,  0, 0,
      0,  0,-15,  0,  0,  0,  0,-16,  0,  0,  0,  0,-17,  0,  0, 0,
      0,-15,  0,  0,  0,  0,  0,-16,  0,  0,  0,  0,  0,-17,  0, 0,
    -15,  0,  0,  0,  0,  0,  0,-16,  0,  0,  0,  0,  0,  0,-17
  ];

  var SHIFTS = { p: 0, n: 1, b: 2, r: 3, q: 4, k: 5 };

  var FLAGS = {
    NORMAL: 'n',
    CAPTURE: 'c',
    BIG_PAWN: 'b',
    EP_CAPTURE: 'e',
    PROMOTION: 'p',
    KSIDE_CASTLE: 'k',
    QSIDE_CASTLE: 'q'
  };

  var BITS = {
    NORMAL: 1,
    CAPTURE: 2,
    BIG_PAWN: 4,
    EP_CAPTURE: 8,
    PROMOTION: 16,
    KSIDE_CASTLE: 32,
    QSIDE_CASTLE: 64
  };

  var RANK_1 = 7;
  var RANK_2 = 6;
  var RANK_3 = 5;
  var RANK_4 = 4;
  var RANK_5 = 3;
  var RANK_6 = 2;
  var RANK_7 = 1;
  var RANK_8 = 0;

  var SQUARES = {
    a8:   0, b8:   1, c8:   2, d8:   3, e8:   4, f8:   5, g8:   6, h8:   7,
    a7:  16, b7:  17, c7:  18, d7:  19, e7:  20, f7:  21, g7:  22, h7:  23,
    a6:  32, b6:  33, c6:  34, d6:  35, e6:  36, f6:  37, g6:  38, h6:  39,
    a5:  48, b5:  49, c5:  50, d5:  51, e5:  52, f5:  53, g5:  54, h5:  55,
    a4:  64, b4:  65, c4:  66, d4:  67, e4:  68, f4:  69, g4:  70, h4:  71,
    a3:  80, b3:  81, c3:  82, d3:  83, e3:  84, f3:  85, g3:  86, h3:  87,
    a2:  96, b2:  97, c2:  98, d2:  99, e2: 100, f2: 101, g2: 102, h2: 103,
    a1: 112, b1: 113, c1: 114, d1: 115, e1: 116, f1: 117, g1: 118, h1: 119
  };

  var ROOKS = {
    w: [{square: SQUARES.a1, flag: BITS.QSIDE_CASTLE},
        {square: SQUARES.h1, flag: BITS.KSIDE_CASTLE}],
    b: [{square: SQUARES.a8, flag: BITS.QSIDE_CASTLE},
        {square: SQUARES.h8, flag: BITS.KSIDE_CASTLE}]
  };

  var board = new Array(128);
  var kings = {w: EMPTY, b: EMPTY};
  var turn = WHITE;
  var castling = {w: 0, b: 0};
  var ep_square = EMPTY;
  var half_moves = 0;
  var move_number = 1;
  var history = [];
  var header = {};

  /* if the user passes in a fen string, load it, else default to
   * starting position
   */
  if (typeof fen === 'undefined') {
    load(DEFAULT_POSITION);
  } else {
    load(fen);
  }

  function clear() {
    board = new Array(128);
    kings = {w: EMPTY, b: EMPTY};
    turn = WHITE;
    castling = {w: 0, b: 0};
    ep_square = EMPTY;
    half_moves = 0;
    move_number = 1;
    history = [];
    header = {};
    update_setup(generate_fen());
  }

  function reset() {
    load(DEFAULT_POSITION);
  }

  function load(fen) {
    var tokens = fen.split(/\s+/);
    var position = tokens[0];
    var square = 0;

    if (!validate_fen(fen).valid) {
      return false;
    }

    clear();

    for (var i = 0; i < position.length; i++) {
      var piece = position.charAt(i);

      if (piece === '/') {
        square += 8;
      } else if (is_digit(piece)) {
        square += parseInt(piece, 10);
      } else {
        var color = (piece < 'a') ? WHITE : BLACK;
        put({type: piece.toLowerCase(), color: color}, algebraic(square));
        square++;
      }
    }

    turn = tokens[1];

    if (tokens[2].indexOf('K') > -1) {
      castling.w |= BITS.KSIDE_CASTLE;
    }
    if (tokens[2].indexOf('Q') > -1) {
      castling.w |= BITS.QSIDE_CASTLE;
    }
    if (tokens[2].indexOf('k') > -1) {
      castling.b |= BITS.KSIDE_CASTLE;
    }
    if (tokens[2].indexOf('q') > -1) {
      castling.b |= BITS.QSIDE_CASTLE;
    }

    ep_square = (tokens[3] === '-') ? EMPTY : SQUARES[tokens[3]];
    half_moves = parseInt(tokens[4], 10);
    move_number = parseInt(tokens[5], 10);

    update_setup(generate_fen());

    return true;
  }

  /* TODO: this function is pretty much crap - it validates structure but
   * completely ignores content (e.g. doesn't verify that each side has a king)
   * ... we should rewrite this, and ditch the silly error_number field while
   * we're at it
   */
  function validate_fen(fen) {
    var errors = {
       0: 'No errors.',
       1: 'FEN string must contain six space-delimited fields.',
       2: '6th field (move number) must be a positive integer.',
       3: '5th field (half move counter) must be a non-negative integer.',
       4: '4th field (en-passant square) is invalid.',
       5: '3rd field (castling availability) is invalid.',
       6: '2nd field (side to move) is invalid.',
       7: '1st field (piece positions) does not contain 8 \'/\'-delimited rows.',
       8: '1st field (piece positions) is invalid [consecutive numbers].',
       9: '1st field (piece positions) is invalid [invalid piece].',
      10: '1st field (piece positions) is invalid [row too large].',
      11: 'Illegal en-passant square',
    };

    /* 1st criterion: 6 space-seperated fields? */
    var tokens = fen.split(/\s+/);
    if (tokens.length !== 6) {
      return {valid: false, error_number: 1, error: errors[1]};
    }

    /* 2nd criterion: move number field is a integer value > 0? */
    if (isNaN(tokens[5]) || (parseInt(tokens[5], 10) <= 0)) {
      return {valid: false, error_number: 2, error: errors[2]};
    }

    /* 3rd criterion: half move counter is an integer >= 0? */
    if (isNaN(tokens[4]) || (parseInt(tokens[4], 10) < 0)) {
      return {valid: false, error_number: 3, error: errors[3]};
    }

    /* 4th criterion: 4th field is a valid e.p.-string? */
    if (!/^(-|[abcdefgh][36])$/.test(tokens[3])) {
      return {valid: false, error_number: 4, error: errors[4]};
    }

    /* 5th criterion: 3th field is a valid castle-string? */
    if( !/^(KQ?k?q?|Qk?q?|kq?|q|-)$/.test(tokens[2])) {
      return {valid: false, error_number: 5, error: errors[5]};
    }

    /* 6th criterion: 2nd field is "w" (white) or "b" (black)? */
    if (!/^(w|b)$/.test(tokens[1])) {
      return {valid: false, error_number: 6, error: errors[6]};
    }

    /* 7th criterion: 1st field contains 8 rows? */
    var rows = tokens[0].split('/');
    if (rows.length !== 8) {
      return {valid: false, error_number: 7, error: errors[7]};
    }

    /* 8th criterion: every row is valid? */
    for (var i = 0; i < rows.length; i++) {
      /* check for right sum of fields AND not two numbers in succession */
      var sum_fields = 0;
      var previous_was_number = false;

      for (var k = 0; k < rows[i].length; k++) {
        if (!isNaN(rows[i][k])) {
          if (previous_was_number) {
            return {valid: false, error_number: 8, error: errors[8]};
          }
          sum_fields += parseInt(rows[i][k], 10);
          previous_was_number = true;
        } else {
          if (!/^[prnbqkPRNBQK]$/.test(rows[i][k])) {
            return {valid: false, error_number: 9, error: errors[9]};
          }
          sum_fields += 1;
          previous_was_number = false;
        }
      }
      if (sum_fields !== 8) {
        return {valid: false, error_number: 10, error: errors[10]};
      }
    }

    if ((tokens[3][1] == '3' && tokens[1] == 'w') ||
        (tokens[3][1] == '6' && tokens[1] == 'b')) {
          return {valid: false, error_number: 11, error: errors[11]};
    }

    /* everything's okay! */
    return {valid: true, error_number: 0, error: errors[0]};
  }

  function generate_fen() {
    var empty = 0;
    var fen = '';

    for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
      if (board[i] == null) {
        empty++;
      } else {
        if (empty > 0) {
          fen += empty;
          empty = 0;
        }
        var color = board[i].color;
        var piece = board[i].type;

        fen += (color === WHITE) ?
                 piece.toUpperCase() : piece.toLowerCase();
      }

      if ((i + 1) & 0x88) {
        if (empty > 0) {
          fen += empty;
        }

        if (i !== SQUARES.h1) {
          fen += '/';
        }

        empty = 0;
        i += 8;
      }
    }

    var cflags = '';
    if (castling[WHITE] & BITS.KSIDE_CASTLE) { cflags += 'K'; }
    if (castling[WHITE] & BITS.QSIDE_CASTLE) { cflags += 'Q'; }
    if (castling[BLACK] & BITS.KSIDE_CASTLE) { cflags += 'k'; }
    if (castling[BLACK] & BITS.QSIDE_CASTLE) { cflags += 'q'; }

    /* do we have an empty castling flag? */
    cflags = cflags || '-';
    var epflags = (ep_square === EMPTY) ? '-' : algebraic(ep_square);

    return [fen, turn, cflags, epflags, half_moves, move_number].join(' ');
  }

  function set_header(args) {
    for (var i = 0; i < args.length; i += 2) {
      if (typeof args[i] === 'string' &&
          typeof args[i + 1] === 'string') {
        header[args[i]] = args[i + 1];
      }
    }
    return header;
  }

  /* called when the initial board setup is changed with put() or remove().
   * modifies the SetUp and FEN properties of the header object.  if the FEN is
   * equal to the default position, the SetUp and FEN are deleted
   * the setup is only updated if history.length is zero, ie moves haven't been
   * made.
   */
  function update_setup(fen) {
    if (history.length > 0) return;

    if (fen !== DEFAULT_POSITION) {
      header['SetUp'] = '1';
      header['FEN'] = fen;
    } else {
      delete header['SetUp'];
      delete header['FEN'];
    }
  }

  function get(square) {
    var piece = board[SQUARES[square]];
    return (piece) ? {type: piece.type, color: piece.color} : null;
  }

  function put(piece, square) {
    /* check for valid piece object */
    if (!('type' in piece && 'color' in piece)) {
      return false;
    }

    /* check for piece */
    if (SYMBOLS.indexOf(piece.type.toLowerCase()) === -1) {
      return false;
    }

    /* check for valid square */
    if (!(square in SQUARES)) {
      return false;
    }

    var sq = SQUARES[square];

    /* don't let the user place more than one king */
    if (piece.type == KING &&
        !(kings[piece.color] == EMPTY || kings[piece.color] == sq)) {
      return false;
    }

    board[sq] = {type: piece.type, color: piece.color};
    if (piece.type === KING) {
      kings[piece.color] = sq;
    }

    update_setup(generate_fen());

    return true;
  }

  function remove(square) {
    var piece = get(square);
    board[SQUARES[square]] = null;
    if (piece && piece.type === KING) {
      kings[piece.color] = EMPTY;
    }

    update_setup(generate_fen());

    return piece;
  }

  function build_move(board, from, to, flags, promotion) {
    var move = {
      color: turn,
      from: from,
      to: to,
      flags: flags,
      piece: board[from].type
    };

    if (promotion) {
      move.flags |= BITS.PROMOTION;
      move.promotion = promotion;
    }

    if (board[to]) {
      move.captured = board[to].type;
    } else if (flags & BITS.EP_CAPTURE) {
        move.captured = PAWN;
    }
    return move;
  }

  function generate_moves(options) {
    function add_move(board, moves, from, to, flags) {
      /* if pawn promotion */
      if (board[from].type === PAWN &&
         (rank(to) === RANK_8 || rank(to) === RANK_1)) {
          var pieces = [QUEEN, ROOK, BISHOP, KNIGHT];
          for (var i = 0, len = pieces.length; i < len; i++) {
            moves.push(build_move(board, from, to, flags, pieces[i]));
          }
      } else {
       moves.push(build_move(board, from, to, flags));
      }
    }

    var moves = [];
    var us = turn;
    var them = swap_color(us);
    var second_rank = {b: RANK_7, w: RANK_2};

    var first_sq = SQUARES.a8;
    var last_sq = SQUARES.h1;
    var single_square = false;

    /* do we want legal moves? */
    var legal = (typeof options !== 'undefined' && 'legal' in options) ?
                options.legal : true;

    /* are we generating moves for a single square? */
    if (typeof options !== 'undefined' && 'square' in options) {
      if (options.square in SQUARES) {
        first_sq = last_sq = SQUARES[options.square];
        single_square = true;
      } else {
        /* invalid square */
        return [];
      }
    }

    for (var i = first_sq; i <= last_sq; i++) {
      /* did we run off the end of the board */
      if (i & 0x88) { i += 7; continue; }

      var piece = board[i];
      if (piece == null || piece.color !== us) {
        continue;
      }

      if (piece.type === PAWN) {
        /* single square, non-capturing */
        var square = i + PAWN_OFFSETS[us][0];
        if (board[square] == null) {
            add_move(board, moves, i, square, BITS.NORMAL);

          /* double square */
          var square = i + PAWN_OFFSETS[us][1];
          if (second_rank[us] === rank(i) && board[square] == null) {
            add_move(board, moves, i, square, BITS.BIG_PAWN);
          }
        }

        /* pawn captures */
        for (j = 2; j < 4; j++) {
          var square = i + PAWN_OFFSETS[us][j];
          if (square & 0x88) continue;

          if (board[square] != null &&
              board[square].color === them) {
              add_move(board, moves, i, square, BITS.CAPTURE);
          } else if (square === ep_square) {
              add_move(board, moves, i, ep_square, BITS.EP_CAPTURE);
          }
        }
      } else {
        for (var j = 0, len = PIECE_OFFSETS[piece.type].length; j < len; j++) {
          var offset = PIECE_OFFSETS[piece.type][j];
          var square = i;

          while (true) {
            square += offset;
            if (square & 0x88) break;

            if (board[square] == null) {
              add_move(board, moves, i, square, BITS.NORMAL);
            } else {
              if (board[square].color === us) break;
              add_move(board, moves, i, square, BITS.CAPTURE);
              break;
            }

            /* break, if knight or king */
            if (piece.type === 'n' || piece.type === 'k') break;
          }
        }
      }
    }

    /* check for castling if: a) we're generating all moves, or b) we're doing
     * single square move generation on the king's square
     */
    if ((!single_square) || last_sq === kings[us]) {
      /* king-side castling */
      if (castling[us] & BITS.KSIDE_CASTLE) {
        var castling_from = kings[us];
        var castling_to = castling_from + 2;

        if (board[castling_from + 1] == null &&
            board[castling_to]       == null &&
            !attacked(them, kings[us]) &&
            !attacked(them, castling_from + 1) &&
            !attacked(them, castling_to)) {
          add_move(board, moves, kings[us] , castling_to,
                   BITS.KSIDE_CASTLE);
        }
      }

      /* queen-side castling */
      if (castling[us] & BITS.QSIDE_CASTLE) {
        var castling_from = kings[us];
        var castling_to = castling_from - 2;

        if (board[castling_from - 1] == null &&
            board[castling_from - 2] == null &&
            board[castling_from - 3] == null &&
            !attacked(them, kings[us]) &&
            !attacked(them, castling_from - 1) &&
            !attacked(them, castling_to)) {
          add_move(board, moves, kings[us], castling_to,
                   BITS.QSIDE_CASTLE);
        }
      }
    }

    /* return all pseudo-legal moves (this includes moves that allow the king
     * to be captured)
     */
    if (!legal) {
      return moves;
    }

    /* filter out illegal moves */
    var legal_moves = [];
    for (var i = 0, len = moves.length; i < len; i++) {
      make_move(moves[i]);
      if (!king_attacked(us)) {
        legal_moves.push(moves[i]);
      }
      undo_move();
    }

    return legal_moves;
  }

  /* convert a move from 0x88 coordinates to Standard Algebraic Notation
   * (SAN)
   */
  function move_to_san(move) {
    var output = '';

    if (move.flags & BITS.KSIDE_CASTLE) {
      output = 'O-O';
    } else if (move.flags & BITS.QSIDE_CASTLE) {
      output = 'O-O-O';
    } else {
      var disambiguator = get_disambiguator(move);

      if (move.piece !== PAWN) {
        output += move.piece.toUpperCase() + disambiguator;
      }

      if (move.flags & (BITS.CAPTURE | BITS.EP_CAPTURE)) {
        if (move.piece === PAWN) {
          output += algebraic(move.from)[0];
        }
        output += 'x';
      }

      output += algebraic(move.to);

      if (move.flags & BITS.PROMOTION) {
        output += '=' + move.promotion.toUpperCase();
      }
    }

    make_move(move);
    if (in_check()) {
      if (in_checkmate()) {
        output += '#';
      } else {
        output += '+';
      }
    }
    undo_move();

    return output;
  }

  function attacked(color, square) {
    for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
      /* did we run off the end of the board */
      if (i & 0x88) { i += 7; continue; }

      /* if empty square or wrong color */
      if (board[i] == null || board[i].color !== color) continue;

      var piece = board[i];
      var difference = i - square;
      var index = difference + 119;

      if (ATTACKS[index] & (1 << SHIFTS[piece.type])) {
        if (piece.type === PAWN) {
          if (difference > 0) {
            if (piece.color === WHITE) return true;
          } else {
            if (piece.color === BLACK) return true;
          }
          continue;
        }

        /* if the piece is a knight or a king */
        if (piece.type === 'n' || piece.type === 'k') return true;

        var offset = RAYS[index];
        var j = i + offset;

        var blocked = false;
        while (j !== square) {
          if (board[j] != null) { blocked = true; break; }
          j += offset;
        }

        if (!blocked) return true;
      }
    }

    return false;
  }

  function king_attacked(color) {
    return attacked(swap_color(color), kings[color]);
  }

  function in_check() {
    return king_attacked(turn);
  }

  function in_checkmate() {
    return in_check() && generate_moves().length === 0;
  }

  function in_stalemate() {
    return !in_check() && generate_moves().length === 0;
  }

  function insufficient_material() {
    var pieces = {};
    var bishops = [];
    var num_pieces = 0;
    var sq_color = 0;

    for (var i = SQUARES.a8; i<= SQUARES.h1; i++) {
      sq_color = (sq_color + 1) % 2;
      if (i & 0x88) { i += 7; continue; }

      var piece = board[i];
      if (piece) {
        pieces[piece.type] = (piece.type in pieces) ?
                              pieces[piece.type] + 1 : 1;
        if (piece.type === BISHOP) {
          bishops.push(sq_color);
        }
        num_pieces++;
      }
    }

    /* k vs. k */
    if (num_pieces === 2) { return true; }

    /* k vs. kn .... or .... k vs. kb */
    else if (num_pieces === 3 && (pieces[BISHOP] === 1 ||
                                 pieces[KNIGHT] === 1)) { return true; }

    /* kb vs. kb where any number of bishops are all on the same color */
    else if (num_pieces === pieces[BISHOP] + 2) {
      var sum = 0;
      var len = bishops.length;
      for (var i = 0; i < len; i++) {
        sum += bishops[i];
      }
      if (sum === 0 || sum === len) { return true; }
    }

    return false;
  }

  function in_threefold_repetition() {
    /* TODO: while this function is fine for casual use, a better
     * implementation would use a Zobrist key (instead of FEN). the
     * Zobrist key would be maintained in the make_move/undo_move functions,
     * avoiding the costly that we do below.
     */
    var moves = [];
    var positions = {};
    var repetition = false;

    while (true) {
      var move = undo_move();
      if (!move) break;
      moves.push(move);
    }

    while (true) {
      /* remove the last two fields in the FEN string, they're not needed
       * when checking for draw by rep */
      var fen = generate_fen().split(' ').slice(0,4).join(' ');

      /* has the position occurred three or move times */
      positions[fen] = (fen in positions) ? positions[fen] + 1 : 1;
      if (positions[fen] >= 3) {
        repetition = true;
      }

      if (!moves.length) {
        break;
      }
      make_move(moves.pop());
    }

    return repetition;
  }

  function push(move) {
    history.push({
      move: move,
      kings: {b: kings.b, w: kings.w},
      turn: turn,
      castling: {b: castling.b, w: castling.w},
      ep_square: ep_square,
      half_moves: half_moves,
      move_number: move_number
    });
  }

  function make_move(move) {
    var us = turn;
    var them = swap_color(us);
    push(move);

    board[move.to] = board[move.from];
    board[move.from] = null;

    /* if ep capture, remove the captured pawn */
    if (move.flags & BITS.EP_CAPTURE) {
      if (turn === BLACK) {
        board[move.to - 16] = null;
      } else {
        board[move.to + 16] = null;
      }
    }

    /* if pawn promotion, replace with new piece */
    if (move.flags & BITS.PROMOTION) {
      board[move.to] = {type: move.promotion, color: us};
    }

    /* if we moved the king */
    if (board[move.to].type === KING) {
      kings[board[move.to].color] = move.to;

      /* if we castled, move the rook next to the king */
      if (move.flags & BITS.KSIDE_CASTLE) {
        var castling_to = move.to - 1;
        var castling_from = move.to + 1;
        board[castling_to] = board[castling_from];
        board[castling_from] = null;
      } else if (move.flags & BITS.QSIDE_CASTLE) {
        var castling_to = move.to + 1;
        var castling_from = move.to - 2;
        board[castling_to] = board[castling_from];
        board[castling_from] = null;
      }

      /* turn off castling */
      castling[us] = '';
    }

    /* turn off castling if we move a rook */
    if (castling[us]) {
      for (var i = 0, len = ROOKS[us].length; i < len; i++) {
        if (move.from === ROOKS[us][i].square &&
            castling[us] & ROOKS[us][i].flag) {
          castling[us] ^= ROOKS[us][i].flag;
          break;
        }
      }
    }

    /* turn off castling if we capture a rook */
    if (castling[them]) {
      for (var i = 0, len = ROOKS[them].length; i < len; i++) {
        if (move.to === ROOKS[them][i].square &&
            castling[them] & ROOKS[them][i].flag) {
          castling[them] ^= ROOKS[them][i].flag;
          break;
        }
      }
    }

    /* if big pawn move, update the en passant square */
    if (move.flags & BITS.BIG_PAWN) {
      if (turn === 'b') {
        ep_square = move.to - 16;
      } else {
        ep_square = move.to + 16;
      }
    } else {
      ep_square = EMPTY;
    }

    /* reset the 50 move counter if a pawn is moved or a piece is captured */
    if (move.piece === PAWN) {
      half_moves = 0;
    } else if (move.flags & (BITS.CAPTURE | BITS.EP_CAPTURE)) {
      half_moves = 0;
    } else {
      half_moves++;
    }

    if (turn === BLACK) {
      move_number++;
    }
    turn = swap_color(turn);
  }

  function undo_move() {
    var old = history.pop();
    if (old == null) { return null; }

    var move = old.move;
    kings = old.kings;
    turn = old.turn;
    castling = old.castling;
    ep_square = old.ep_square;
    half_moves = old.half_moves;
    move_number = old.move_number;

    var us = turn;
    var them = swap_color(turn);

    board[move.from] = board[move.to];
    board[move.from].type = move.piece;  // to undo any promotions
    board[move.to] = null;

    if (move.flags & BITS.CAPTURE) {
      board[move.to] = {type: move.captured, color: them};
    } else if (move.flags & BITS.EP_CAPTURE) {
      var index;
      if (us === BLACK) {
        index = move.to - 16;
      } else {
        index = move.to + 16;
      }
      board[index] = {type: PAWN, color: them};
    }


    if (move.flags & (BITS.KSIDE_CASTLE | BITS.QSIDE_CASTLE)) {
      var castling_to, castling_from;
      if (move.flags & BITS.KSIDE_CASTLE) {
        castling_to = move.to + 1;
        castling_from = move.to - 1;
      } else if (move.flags & BITS.QSIDE_CASTLE) {
        castling_to = move.to - 2;
        castling_from = move.to + 1;
      }

      board[castling_to] = board[castling_from];
      board[castling_from] = null;
    }

    return move;
  }

  /* this function is used to uniquely identify ambiguous moves */
  function get_disambiguator(move) {
    var moves = generate_moves();

    var from = move.from;
    var to = move.to;
    var piece = move.piece;

    var ambiguities = 0;
    var same_rank = 0;
    var same_file = 0;

    for (var i = 0, len = moves.length; i < len; i++) {
      var ambig_from = moves[i].from;
      var ambig_to = moves[i].to;
      var ambig_piece = moves[i].piece;

      /* if a move of the same piece type ends on the same to square, we'll
       * need to add a disambiguator to the algebraic notation
       */
      if (piece === ambig_piece && from !== ambig_from && to === ambig_to) {
        ambiguities++;

        if (rank(from) === rank(ambig_from)) {
          same_rank++;
        }

        if (file(from) === file(ambig_from)) {
          same_file++;
        }
      }
    }

    if (ambiguities > 0) {
      /* if there exists a similar moving piece on the same rank and file as
       * the move in question, use the square as the disambiguator
       */
      if (same_rank > 0 && same_file > 0) {
        return algebraic(from);
      }
      /* if the moving piece rests on the same file, use the rank symbol as the
       * disambiguator
       */
      else if (same_file > 0) {
        return algebraic(from).charAt(1);
      }
      /* else use the file symbol */
      else {
        return algebraic(from).charAt(0);
      }
    }

    return '';
  }

  function ascii() {
    var s = '   +------------------------+\n';
    for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
      /* display the rank */
      if (file(i) === 0) {
        s += ' ' + '87654321'[rank(i)] + ' |';
      }

      /* empty piece */
      if (board[i] == null) {
        s += ' . ';
      } else {
        var piece = board[i].type;
        var color = board[i].color;
        var symbol = (color === WHITE) ?
                     piece.toUpperCase() : piece.toLowerCase();
        s += ' ' + symbol + ' ';
      }

      if ((i + 1) & 0x88) {
        s += '|\n';
        i += 8;
      }
    }
    s += '   +------------------------+\n';
    s += '     a  b  c  d  e  f  g  h\n';

    return s;
  }

  /*****************************************************************************
   * UTILITY FUNCTIONS
   ****************************************************************************/
  function rank(i) {
    return i >> 4;
  }

  function file(i) {
    return i & 15;
  }

  function algebraic(i){
    var f = file(i), r = rank(i);
    return 'abcdefgh'.substring(f,f+1) + '87654321'.substring(r,r+1);
  }

  function swap_color(c) {
    return c === WHITE ? BLACK : WHITE;
  }

  function is_digit(c) {
    return '0123456789'.indexOf(c) !== -1;
  }

  /* pretty = external move object */
  function make_pretty(ugly_move) {
    var move = clone(ugly_move);
    move.san = move_to_san(move);
    move.to = algebraic(move.to);
    move.from = algebraic(move.from);

    var flags = '';

    for (var flag in BITS) {
      if (BITS[flag] & move.flags) {
        flags += FLAGS[flag];
      }
    }
    move.flags = flags;

    return move;
  }

  function clone(obj) {
    var dupe = (obj instanceof Array) ? [] : {};

    for (var property in obj) {
      if (typeof property === 'object') {
        dupe[property] = clone(obj[property]);
      } else {
        dupe[property] = obj[property];
      }
    }

    return dupe;
  }

  function trim(str) {
    return str.replace(/^\s+|\s+$/g, '');
  }

  /*****************************************************************************
   * DEBUGGING UTILITIES
   ****************************************************************************/
  function perft(depth) {
    var moves = generate_moves({legal: false});
    var nodes = 0;
    var color = turn;

    for (var i = 0, len = moves.length; i < len; i++) {
      make_move(moves[i]);
      if (!king_attacked(color)) {
        if (depth - 1 > 0) {
          var child_nodes = perft(depth - 1);
          nodes += child_nodes;
        } else {
          nodes++;
        }
      }
      undo_move();
    }

    return nodes;
  }

  return {
    /***************************************************************************
     * PUBLIC CONSTANTS (is there a better way to do this?)
     **************************************************************************/
    WHITE: WHITE,
    BLACK: BLACK,
    PAWN: PAWN,
    KNIGHT: KNIGHT,
    BISHOP: BISHOP,
    ROOK: ROOK,
    QUEEN: QUEEN,
    KING: KING,
    SQUARES: (function() {
                /* from the ECMA-262 spec (section 12.6.4):
                 * "The mechanics of enumerating the properties ... is
                 * implementation dependent"
                 * so: for (var sq in SQUARES) { keys.push(sq); } might not be
                 * ordered correctly
                 */
                var keys = [];
                for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
                  if (i & 0x88) { i += 7; continue; }
                  keys.push(algebraic(i));
                }
                return keys;
              })(),
    FLAGS: FLAGS,

    /***************************************************************************
     * PUBLIC API
     **************************************************************************/
    load: function(fen) {
      return load(fen);
    },

    reset: function() {
      return reset();
    },

    moves: function(options) {
      /* The internal representation of a chess move is in 0x88 format, and
       * not meant to be human-readable.  The code below converts the 0x88
       * square coordinates to algebraic coordinates.  It also prunes an
       * unnecessary move keys resulting from a verbose call.
       */

      var ugly_moves = generate_moves(options);
      var moves = [];

      for (var i = 0, len = ugly_moves.length; i < len; i++) {

        /* does the user want a full move object (most likely not), or just
         * SAN
         */
        if (typeof options !== 'undefined' && 'verbose' in options &&
            options.verbose) {
          moves.push(make_pretty(ugly_moves[i]));
        } else {
          moves.push(move_to_san(ugly_moves[i]));
        }
      }

      return moves;
    },

    in_check: function() {
      return in_check();
    },

    in_checkmate: function() {
      return in_checkmate();
    },

    in_stalemate: function() {
      return in_stalemate();
    },

    in_draw: function() {
      return half_moves >= 100 ||
             in_stalemate() ||
             insufficient_material() ||
             in_threefold_repetition();
    },

    insufficient_material: function() {
      return insufficient_material();
    },

    in_threefold_repetition: function() {
      return in_threefold_repetition();
    },

    game_over: function() {
      return half_moves >= 100 ||
             in_checkmate() ||
             in_stalemate() ||
             insufficient_material() ||
             in_threefold_repetition();
    },

    validate_fen: function(fen) {
      return validate_fen(fen);
    },

    fen: function() {
      return generate_fen();
    },

    pgn: function(options) {
      /* using the specification from http://www.chessclub.com/help/PGN-spec
       * example for html usage: .pgn({ max_width: 72, newline_char: "<br />" })
       */
      var newline = (typeof options === 'object' &&
                     typeof options.newline_char === 'string') ?
                     options.newline_char : '\n';
      var max_width = (typeof options === 'object' &&
                       typeof options.max_width === 'number') ?
                       options.max_width : 0;
      var result = [];
      var header_exists = false;

      /* add the PGN header headerrmation */
      for (var i in header) {
        /* TODO: order of enumerated properties in header object is not
         * guaranteed, see ECMA-262 spec (section 12.6.4)
         */
        result.push('[' + i + ' \"' + header[i] + '\"]' + newline);
        header_exists = true;
      }

      if (header_exists && history.length) {
        result.push(newline);
      }

      /* pop all of history onto reversed_history */
      var reversed_history = [];
      while (history.length > 0) {
        reversed_history.push(undo_move());
      }

      var moves = [];
      var move_string = '';

      /* build the list of moves.  a move_string looks like: "3. e3 e6" */
      while (reversed_history.length > 0) {
        var move = reversed_history.pop();

        /* if the position started with black to move, start PGN with 1. ... */
        if (!history.length && move.color === 'b') {
          move_string = move_number + '. ...';
        } else if (move.color === 'w') {
          /* store the previous generated move_string if we have one */
          if (move_string.length) {
            moves.push(move_string);
          }
          move_string = move_number + '.';
        }

        move_string = move_string + ' ' + move_to_san(move);
        make_move(move);
      }

      /* are there any other leftover moves? */
      if (move_string.length) {
        moves.push(move_string);
      }

      /* is there a result? */
      if (typeof header.Result !== 'undefined') {
        moves.push(header.Result);
      }

      /* history should be back to what is was before we started generating PGN,
       * so join together moves
       */
      if (max_width === 0) {
        return result.join('') + moves.join(' ');
      }

      /* wrap the PGN output at max_width */
      var current_width = 0;
      for (var i = 0; i < moves.length; i++) {
        /* if the current move will push past max_width */
        if (current_width + moves[i].length > max_width && i !== 0) {

          /* don't end the line with whitespace */
          if (result[result.length - 1] === ' ') {
            result.pop();
          }

          result.push(newline);
          current_width = 0;
        } else if (i !== 0) {
          result.push(' ');
          current_width++;
        }
        result.push(moves[i]);
        current_width += moves[i].length;
      }

      return result.join('');
    },

    load_pgn: function(pgn, options) {
      function mask(str) {
        return str.replace(/\\/g, '\\');
      }

      /* convert a move from Standard Algebraic Notation (SAN) to 0x88
       * coordinates
      */
      function move_from_san(move) {
        /* strip off any move decorations: e.g Nf3+?! */
        var move_replaced = move.replace(/=/,'').replace(/[+#]?[?!]*$/,'');
        var moves = generate_moves();
        for (var i = 0, len = moves.length; i < len; i++) {
          if (move_replaced ===
              move_to_san(moves[i]).replace(/=/,'').replace(/[+#]?[?!]*$/,'')) {
            return moves[i];
          }
        }
        return null;
      }

      function get_move_obj(move) {
        return move_from_san(trim(move));
      }

      function has_keys(object) {
        for (var key in object) {
          return true;
        }
        return false;
      }

      function parse_pgn_header(header, options) {
        var newline_char = (typeof options === 'object' &&
                            typeof options.newline_char === 'string') ?
                            options.newline_char : '\r?\n';
        var header_obj = {};
        var headers = header.split(new RegExp(mask(newline_char)));
        var key = '';
        var value = '';

        for (var i = 0; i < headers.length; i++) {
          key = headers[i].replace(/^\[([A-Z][A-Za-z]*)\s.*\]$/, '$1');
          value = headers[i].replace(/^\[[A-Za-z]+\s"(.*)"\]$/, '$1');
          if (trim(key).length > 0) {
            header_obj[key] = value;
          }
        }

        return header_obj;
      }

      var newline_char = (typeof options === 'object' &&
                          typeof options.newline_char === 'string') ?
                          options.newline_char : '\r?\n';
        var regex = new RegExp('^(\\[(.|' + mask(newline_char) + ')*\\])' +
                               '(' + mask(newline_char) + ')*' +
                               '1.(' + mask(newline_char) + '|.)*$', 'g');

      /* get header part of the PGN file */
      var header_string = pgn.replace(regex, '$1');

      /* no info part given, begins with moves */
      if (header_string[0] !== '[') {
        header_string = '';
      }

     reset();

      /* parse PGN header */
      var headers = parse_pgn_header(header_string, options);
      for (var key in headers) {
        set_header([key, headers[key]]);
      }

      /* load the starting position indicated by [Setup '1'] and
      * [FEN position] */
      if (headers['SetUp'] === '1') {
          if (!(('FEN' in headers) && load(headers['FEN']))) {
            return false;
          }
      }

      /* delete header to get the moves */
      var ms = pgn.replace(header_string, '').replace(new RegExp(mask(newline_char), 'g'), ' ');

      /* delete comments */
      ms = ms.replace(/(\{[^}]+\})+?/g, '');

      /* delete recursive annotation variations */
      var rav_regex = /(\([^\(\)]+\))+?/g
      while (rav_regex.test(ms)) {
        ms = ms.replace(rav_regex, '');
      }

      /* delete move numbers */
      ms = ms.replace(/\d+\.(\.\.)?/g, '');

      /* delete ... indicating black to move */
      ms = ms.replace(/\.\.\./g, '');

      /* delete numeric annotation glyphs */
      ms = ms.replace(/\$\d+/g, '');

      /* trim and get array of moves */
      var moves = trim(ms).split(new RegExp(/\s+/));

      /* delete empty entries */
      moves = moves.join(',').replace(/,,+/g, ',').split(',');
      var move = '';

      for (var half_move = 0; half_move < moves.length - 1; half_move++) {
        move = get_move_obj(moves[half_move]);

        /* move not possible! (don't clear the board to examine to show the
         * latest valid position)
         */
        if (move == null) {
          return false;
        } else {
          make_move(move);
        }
      }

      /* examine last move */
      move = moves[moves.length - 1];
      if (POSSIBLE_RESULTS.indexOf(move) > -1) {
        if (has_keys(header) && typeof header.Result === 'undefined') {
          set_header(['Result', move]);
        }
      }
      else {
        move = get_move_obj(move);
        if (move == null) {
          return false;
        } else {
          make_move(move);
        }
      }
      return true;
    },

    header: function() {
      return set_header(arguments);
    },

    ascii: function() {
      return ascii();
    },

    turn: function() {
      return turn;
    },

    move: function(move) {
      /* The move function can be called with in the following parameters:
       *
       * .move('Nxb7')      <- where 'move' is a case-sensitive SAN string
       *
       * .move({ from: 'h7', <- where the 'move' is a move object (additional
       *         to :'h8',      fields are ignored)
       *         promotion: 'q',
       *      })
       */
      var move_obj = null;
      var moves = generate_moves();

      if (typeof move === 'string') {
        /* convert the move string to a move object */
        /* strip off any move decorations: e.g Nf3+?! */
        var move_replaced = move.replace(/=/,'').replace(/[+#]?[?!]*$/,'');
        for (var i = 0, len = moves.length; i < len; i++) {
          if (move_replaced ===
              move_to_san(moves[i]).replace(/=/,'').replace(/[+#]?[?!]*$/,'')) {
            move_obj = moves[i];
            break;
          }
        }
      } else if (typeof move === 'object') {
        /* convert the pretty move object to an ugly move object */
        for (var i = 0, len = moves.length; i < len; i++) {
          if (move.from === algebraic(moves[i].from) &&
              move.to === algebraic(moves[i].to) &&
              (!('promotion' in moves[i]) ||
              move.promotion === moves[i].promotion)) {
            move_obj = moves[i];
            break;
          }
        }
      }

      /* failed to find move */
      if (!move_obj) {
        return null;
      }

      /* need to make a copy of move because we can't generate SAN after the
       * move is made
       */
      var pretty_move = make_pretty(move_obj);

      make_move(move_obj);

      return pretty_move;
    },

    undo: function() {
      var move = undo_move();
      return (move) ? make_pretty(move) : null;
    },

    clear: function() {
      return clear();
    },

    put: function(piece, square) {
      return put(piece, square);
    },

    get: function(square) {
      return get(square);
    },

    remove: function(square) {
      return remove(square);
    },

    perft: function(depth) {
      return perft(depth);
    },

    square_color: function(square) {
      if (square in SQUARES) {
        var sq_0x88 = SQUARES[square];
        return ((rank(sq_0x88) + file(sq_0x88)) % 2 === 0) ? 'light' : 'dark';
      }

      return null;
    },

    history: function(options) {
      var reversed_history = [];
      var move_history = [];
      var verbose = (typeof options !== 'undefined' && 'verbose' in options &&
                     options.verbose);

      while (history.length > 0) {
        reversed_history.push(undo_move());
      }

      while (reversed_history.length > 0) {
        var move = reversed_history.pop();
        if (verbose) {
          move_history.push(make_pretty(move));
        } else {
          move_history.push(move_to_san(move));
        }
        make_move(move);
      }

      return move_history;
    }

  };
};

/* export Chess object if using node or any other CommonJS compatible
 * environment */
//if (typeof exports !== 'undefined') exports.Chess = Chess;
/* export Chess object for any RequireJS compatible environment */
//if (typeof define !== 'undefined') define( function () { return Chess;  });

//export function Chess;


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map