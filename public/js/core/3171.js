"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3171],{569:(t,a,s)=>{s.d(a,{Z:()=>n});var e=s(1519),i=s.n(e)()((function(t){return t[1]}));i.push([t.id,".icon-bg[data-v-20f0a2aa]{background-color:#c3c3c3;border-radius:50%;color:#fff;cursor:pointer;display:inline-flex;font-size:1rem;font-weight:600;padding:8px 12px;position:relative;text-align:center;vertical-align:middle;white-space:nowrap}",""]);const n=i},3171:(t,a,s)=>{s.r(a),s.d(a,{default:()=>c});const e={props:["user"],components:{},data:function(){return{account:{},forex_log:{},forex_logs:{},forex_investment:{},investment_logs:{},investment_logs_amount:{},investment_logs_profit:{},signals:[],investment:{},wallets:{},wallet:{},currency:{},forex_plans:[],investment_id:{},investment_wallet:null,deposit_wallet:null,withdraw_wallet:null,amount:0,DepositAmount:0,WithdrawAmount:0,loading:!1}},methods:{goBack:function(){window.history.length>1?this.$router.go(-1):this.$router.push("/")},fetchData:function(){var t=this;this.$http.post("/user/fetch/forex").then((function(a){t.account=a.data.account,t.forex_logs=a.data.forex_logs,t.forex_log=a.data.forex_log,t.forex_investment=a.data.forex_investment,t.signals=a.data.signals,t.investment_logs=a.data.investment_logs,t.investment_logs_amount=a.data.investment_logs_amount,t.investment_logs_profit=a.data.investment_logs_profit,t.investment=a.data.investment,t.wallets=a.data.wallets,t.wallet=a.data.wallet,t.forex_plans=a.data.forex_plans,t.currency=a.data.currency})).catch((function(t){"nokyc"==t.response.data.message&&(window.location.href="/user/kyc")}))},getPlan:function(t){if(null==this.forex_plans.find((function(a){return a.id===t})))return null;this.forex_plans.find((function(a){return a.id===t})).title},getSignal:function(t){return null!=this.signals.find((function(a){return a.id===t}))?this.signals.find((function(a){return a.id===t})).image:null},createAccount:function(){var t=this;this.$http.post("/user/forex/create").then((function(a){t.$toast[a.data.type](a.data.message),t.account=a.data.meta})).catch((function(a){t.$toast.error(a.response.data)})).finally((function(){}))},fetchWallet:function(){var t=this;this.$http.post("/user/fetch/wallet",{type:"funding",symbol:"USDT"}).then((function(a){t.wallet=a.data.balance}))},createWallet:function(){var t=this;this.loading=!0,this.$http.post("/user/wallet/j/create",{type:"funding",symbol:"USDT"}).then((function(a){t.fetchWallet(),t.$toast[a.data.type](a.data.message)})).catch((function(a){t.$toast.error(a.response.data)})).finally((function(){t.loading=!1}))},submitInvestment:function(){var t=this;this.loading=!0,this.$http.post("/user/forex/store",{investment_id:this.investment_id,symbol:this.investment_wallet,amount:this.amount}).then((function(a){t.$toast[a.data.type](a.data.message),t.forex_logs=a.data.meta,t.fetchData()})).catch((function(a){t.$toast.error(a.response.data)})).finally((function(){t.loading=!1}))},Deposit:function(){var t=this;this.loading=!0,this.$http.post("/user/forex/deposit",{symbol:this.deposit_wallet,amount:this.DepositAmount}).then((function(a){t.$toast[a.data.type](a.data.message),t.forex_logs=a.data.meta})).catch((function(a){t.$toast.error(a.response.data)})).finally((function(){$("#deposit").modal("hide"),t.loading=!1}))},Withdraw:function(){var t=this;this.loading=!0,this.$http.post("/user/forex/withdraw",{symbol:this.withdraw_wallet,amount:this.WithdrawAmount}).then((function(a){t.$toast[a.data.type](a.data.message),t.forex_logs=a.data.meta})).catch((function(a){t.$toast.error(a.response.data)})).finally((function(){$("#withdraw").modal("hide"),t.loading=!1}))},selectWallet:function(t){this.$refs.wallett.innerText=t,this.investment_wallet=t},SelectDepositWallet:function(t){this.$refs.DepositWallet.innerText=t,this.$refs.DepositAmountSymbol.innerText=t,this.deposit_wallet=t},SelectWithdrawWallet:function(t){this.$refs.WithdrawWallet.innerText=t,this.$refs.WithdrawAmountSymbol.innerText=t,this.withdraw_wallet=t},selectInvestment:function(t,a){this.$refs.selectedInv.innerText=a,this.investment_id=t,$("#InvestmentType").modal("hide")}},created:function(){this.fetchData()},mounted:function(){},destroyed:function(){}};var i=s(3379),n=s.n(i),l=s(569),o={insert:"head",singleton:!1};n()(l.Z,o);l.Z.locals;const c=(0,s(1900).Z)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"row match-height"},[s("div",{staticClass:"col-xl-3 col-lg-4 col-md-12 col-sm-12"},[s("div",{staticClass:"card card-profile"},[s("img",{staticClass:"card-img-top",attrs:{src:"assets/images/ico/stage-3.jpg",alt:"Profile Cover Photo"}}),t._v(" "),s("div",{staticClass:"card-body"},[s("div",{staticClass:"profile-image-wrapper"},[s("div",{staticClass:"profile-image"},[s("div",{staticClass:"avatar"},[null!=t.user.profile_photo_path?s("img",{staticClass:"round",attrs:{src:t.user.profile_photo_path?"assets/images/profile/"+t.user.profile_photo_path:"/market/notification.png",alt:"avatar"}}):t._e()])])]),t._v(" "),s("h3",[t._v(t._s(t.user.firstname))]),t._v(" "),t._m(0),t._v(" "),null!=t.account?[1==t.account.status?s("router-link",{attrs:{to:"/forex/trade"}},[s("button",{staticClass:"btn btn-primary mt-1",attrs:{type:"button"}},[t._v("\n                                Launch Forex App\n                            ")])]):s("div",[s("button",{staticClass:"btn btn-secondary mt-1",attrs:{type:"button",disabled:""}},[t._v("\n                                Forex App Locked\n                            ")]),t._v(" "),s("div",{staticClass:"text-warning"},[s("small",[t._v("Deposit Firstly")])])]),t._v(" "),s("div",[null!=t.wallet?s("div",{key:t.wallet.balance,staticClass:"d-flex justify-content-center align-items-center my-1"},[s("button",{staticClass:"btn btn-success",attrs:{type:"button","data-bs-toggle":"modal","data-bs-target":"#deposit"}},[t._v("\n                                    Deposit\n                                ")]),t._v(" "),s("button",{staticClass:"btn btn-danger ms-1",attrs:{type:"button","data-bs-toggle":"modal","data-bs-target":"#withdraw"}},[t._v("\n                                    Withdraw\n                                ")])]):s("form",{key:t.wallet,staticClass:"my-1",on:{submit:function(a){return a.preventDefault(),t.createWallet()}}},[s("button",{staticClass:"btn btn-warning",attrs:{type:"submit",disabled:t.loading}},[t._v("\n                                    Create Wallet\n                                ")])])])]:s("a",{on:{click:function(a){return t.createAccount()}}},[s("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[t._v("\n                            Create Forex Account\n                        ")])])],2)])]),t._v(" "),s("div",{staticClass:"col-xl-9 col-lg-8 col-md-12 col-sm-12"},[s("div",{staticClass:"row match-height"},[null!=t.account?s("div",{staticClass:"col-xl-6 col-lg-6 col-md-12 col-sm-12"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xl-6 col-lg-6"},[s("div",{staticClass:"card text-center"},[s("div",{staticClass:"card-body"},[t._m(1),t._v(" "),s("h2",{staticClass:"fw-bolder"},[t._v("\n                                        "+t._s(t._f("toMoney")(t.account.balance*t.currency.rate))+"\n                                        "+t._s(t.currency.symbol)+"\n                                    ")]),t._v(" "),s("p",{staticClass:"card-text"},[t._v("\n                                        Forex Account Balance\n                                    ")])])])]),t._v(" "),s("div",{staticClass:"col-xl-6 col-lg-6"},[s("div",{staticClass:"card text-center"},[s("div",{staticClass:"card-body"},[t._m(2),t._v(" "),s("h2",{staticClass:"fw-bolder"},[t._v("\n                                        "+t._s(t._f("toMoney")((t.forex_log.profit?t.forex_log.profit:0)*t.currency.rate))+"\n                                        "+t._s(t.currency.symbol)+"\n                                    ")]),t._v(" "),s("p",{staticClass:"card-text"},[t._v("\n                                        Forex Account Profit\n                                    ")])])])]),t._v(" "),s("div",{staticClass:"col-xl-6 col-lg-6"},[s("div",{staticClass:"card text-center"},[s("div",{staticClass:"card-body"},[t._m(3),t._v(" "),s("h2",{staticClass:"fw-bolder"},[t._v("\n                                        "+t._s(t._f("toMoney")(t.investment_logs_amount*t.currency.rate))+"\n                                        "+t._s(t.currency.symbol)+"\n                                    ")]),t._v(" "),s("p",{staticClass:"card-text"},[t._v("\n                                        Total Investment\n                                    ")])])])]),t._v(" "),s("div",{staticClass:"col-xl-6 col-lg-6"},[s("div",{staticClass:"card text-center"},[s("div",{staticClass:"card-body"},[t._m(4),t._v(" "),s("h2",{staticClass:"fw-bolder"},[t._v("\n                                        "+t._s(t._f("toMoney")(t.investment_logs_profit*t.currency.rate))+"\n                                        "+t._s(t.currency.symbol)+"\n                                    ")]),t._v(" "),s("p",{staticClass:"card-text"},[t._v("\n                                        Investments Profit\n                                    ")])])])])])]):s("div",{staticClass:"col-xl-6 col-lg-6 col-md-12 col-sm-12"},[t._m(5)]),t._v(" "),s("div",{staticClass:"col-xl-6 col-lg-6 col-md-12 col-sm-12"},[s("div",{staticClass:"card card-transaction"},[t._m(6),t._v(" "),null!=t.forex_logs&&t.forex_logs.length>0?s("div",{staticClass:"card-body",staticStyle:{"max-height":"280px","overflow-y":"auto"}},t._l(t.forex_logs,(function(a,e){return s("div",{key:e,staticClass:"transaction-item"},[s("div",{staticClass:"d-flex"},[s("div",{staticClass:"icon-bg bg-light-primary rounded float-start"},[s("div",{staticClass:"avatar-content"},[1==a.type?s("span",{staticClass:"text-success font-medium-5"},[s("i",{staticClass:"bi bi-journal-arrow-up"})]):2==a.type?s("span",{staticClass:"text-danger font-medium-5"},[s("i",{staticClass:"bi bi-journal-arrow-down"})]):3==a.type?s("span",{staticClass:"text-warning font-medium-5"},[s("i",{staticClass:"bi bi-briefcase"})]):t._e()])]),t._v(" "),s("div",{staticClass:"transaction-percentage"},[1==a.type?s("div",[s("span",{staticClass:"text-success fw-bold"},[t._v("Forex Deposit")]),t._v(" "),s("p",[s("small",[t._v("\n                                                    "+t._s(t._f("moment")(a.created_at,"dddd, MMMM Do YYYY"))+"\n                                                ")])])]):2==a.type?s("div",[s("span",{staticClass:"text-danger fw-bold"},[t._v("Forex Withdraw")]),t._v(" "),s("p",[s("small",[t._v("\n                                                    "+t._s(t._f("moment")(a.created_at,"dddd, MMMM Do YYYY"))+"\n                                                ")])])]):3==a.type?s("div",[s("span",{staticClass:"text-warning fw-bold"},[t._v("Forex Investment")]),t._v(" "),s("p",[s("small",[t._v("\n                                                    "+t._s(t._f("moment")(a.created_at,"dddd, MMMM Do YYYY"))+"\n                                                ")])])]):t._e()])]),t._v(" "),s("div",{staticClass:"fw-bolder"},[3!=a.type&&0==a.status||3==a.type&&1!=a.status?s("span",{staticClass:"badge bg-warning"},[t._v("Pending")]):t._e(),t._v(" "),1==a.type&&0!=a.status?s("span",{staticClass:"badge bg-success"},[t._v("-\n                                        "+t._s(t._f("toMoney")(a.amount*t.currency.rate))+"\n                                        "+t._s(t.currency.symbol))]):2==a.type&&0!=a.status?s("span",{staticClass:"badge bg-danger"},[t._v("+\n                                        "+t._s(t._f("toMoney")(a.amount*t.currency.rate))+"\n                                        "+t._s(t.currency.symbol))]):3==a.type&&1==a.status?s("span",{staticClass:"badge bg-warning"},[t._v("+\n                                        "+t._s(t._f("toMoney")(a.profit*t.currency.rate))+"\n                                        "+t._s(t.currency.symbol))]):t._e()])])})),0):s("div",{staticClass:"text-muted text-center",attrs:{colspan:"100%"}},[s("img",{attrs:{height:"128px",width:"128px",src:"https://assets.staticimg.com/pro/2.0.4/images/empty.svg",alt:""}}),t._v(" "),s("p",{},[t._v("No Data Found")])])])])]),t._v(" "),null!=t.account?s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("form",{on:{submit:function(a){return a.preventDefault(),t.submitInvestment()}}},[s("div",{staticClass:"card-title"},[t._v("\n                                    Forex Investments\n                                ")]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-3 col-md-6 col-sm-6 col-xs-12"},[null!=t.wallets?s("div",{staticClass:"dropdown"},[s("button",{ref:"wallett",staticClass:"btn btn-outline-warning dropdown-toggle w-100 mb-1",attrs:{type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}},[t._v("\n                                                Select Wallet\n                                            ")]),t._v(" "),s("ul",{staticClass:"dropdown-menu dropdown-menu-end"},t._l(t.wallets,(function(a,e){return s("li",{key:e},[s("a",{staticClass:"dropdown-item",on:{click:function(s){return t.selectWallet(a.symbol)}}},[t._v(t._s(a.symbol)+"\n                                                        "+t._s(t._f("toMoney")(a.balance))+"\n                                                    ")])])})),0)]):s("form",{key:t.wallets,staticClass:"my-1",on:{submit:function(a){return a.preventDefault(),t.createWallet()}}},[s("button",{staticClass:"btn btn-warning",attrs:{type:"submit",disabled:t.loading}},[t._v("\n                                                Create Wallet\n                                            ")])])]),t._v(" "),s("div",{staticClass:"col-lg-3 col-md-6 col-sm-6 col-xs-12"},[s("div",{staticClass:"input-group w-100 mb-1"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],staticClass:"form-control",attrs:{type:"number",required:"",placeholder:"Amount"},domProps:{value:t.amount},on:{input:function(a){a.target.composing||(t.amount=a.target.value)}}}),t._v(" "),s("span",{staticClass:"input-group-text text-light"},[t._v(t._s(t.currency.symbol))])])]),t._v(" "),s("div",{staticClass:"col-lg-3 col-md-6 col-sm-6 col-xs-12"},[s("button",{ref:"selectedInv",staticClass:"btn btn-primary w-100 mb-1",attrs:{type:"button","data-bs-toggle":"modal","data-bs-target":"#InvestmentType"}},[t._v("\n                                            Select Investment Plan\n                                        ")])]),t._v(" "),s("div",{staticClass:"col-lg-3 col-md-6 col-sm-6 col-xs-12"},[s("button",{staticClass:"w-100 mb-1 btn btn-success d-flex align-items-center justify-content-start",attrs:{type:"submit",disabled:t.loading}},[s("i",{staticClass:"bi bi-caret-right me-1"}),s("span",[t._v("Start Investment")])])])])])])])])]):t._e()])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table"},[t._m(7),t._v(" "),null!=t.investment_logs&&t.investment_logs.length>0?s("tbody",{key:t.investment_logs.length},t._l(t.investment_logs,(function(a,e){return s("tr",{key:e},[null!=t.forex_plans?s("td",{key:t.forex_plans[a.investment_id],staticClass:"text-uppercase",attrs:{"data-label":"Plan"}},[t._v("\n                                    "+t._s(t.getPlan(a.investment_id))+"\n                                ")]):t._e(),t._v(" "),s("td",{attrs:{"data-label":"Amount"}},[t._v("\n                                    "+t._s(a.amount*t.currency.rate)+"\n                                    "+t._s(t.currency.symbol)+"\n                                ")]),t._v(" "),1==a.result?s("td",{staticClass:"text-success",attrs:{"data-label":"Profit"}},[t._v("\n                                    +\n                                    "+t._s(a.profit*t.currency.rate)+"\n                                    "+t._s(t.currency.symbol)+"\n                                ")]):2==a.result?s("td",{staticClass:"text-danger",attrs:{"data-label":"Profit"}},[t._v("\n                                    -\n                                    "+t._s(a.profit*t.currency.rate)+"\n                                    "+t._s(t.currency.symbol)+"\n                                ")]):3==a.result?s("td",{attrs:{"data-label":"Profit"}},[t._v("\n                                    "+t._s(a.profit*t.currency.rate)+"\n                                    "+t._s(t.currency.symbol)+"\n                                ")]):s("td",{attrs:{"data-label":"Profit"}},[s("span",{staticClass:"badge bg-warning"},[t._v("Pending")])]),t._v(" "),s("td",{attrs:{"data-label":"Duration"}},[s("div",[t._v("\n                                        Start:\n                                        "),s("span",{staticClass:"fw-bold"},[t._v(t._s(a.start_date))])]),t._v(" "),s("div",[t._v("\n                                        End:\n                                        "),s("span",{staticClass:"fw-bold"},[t._v(t._s(a.end_date))])])]),t._v(" "),s("td",{attrs:{"data-label":"Status"}},[1!==a.status?s("span",{staticClass:"badge bg-primary"},[t._v("Running")]):s("span",{staticClass:"badge bg-success"},[t._v("Complete")])])])})),0):s("tbody",[t._m(8)])])])])])]),t._v(" "),null!==t.account?s("div",{staticClass:"row"},[null!=t.getSignal(t.account.signal1_id)?s("div",{staticClass:"col"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("span",{staticClass:"card-title"},[t._v("Signal 1")]),t._v(" "),s("div",{staticClass:"data-doc-item data-doc-item-lg mx-auto my-1"},[s("div",{staticClass:"data-doc-image"},[s("img",{staticClass:"img-fluid img-thumbnail",attrs:{src:"assets/images/signal/"+t.getSignal(t.account.signal1_id)}})]),t._v(" "),s("ul",{staticClass:"data-doc-actions"},[s("li",[s("a",{attrs:{href:"assets/images/signal/"+t.getSignal(t.account.signal1_id),target:"_blank"}},[s("i",{staticClass:"bi bi-cloud-download text-white"})])])])])])])]):t._e(),t._v(" "),null!=t.getSignal(t.account.signal2_id)?s("div",{staticClass:"col"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("span",{staticClass:"card-title"},[t._v("Signal 2")]),t._v(" "),s("div",{staticClass:"data-doc-item data-doc-item-lg mx-auto my-1"},[s("div",{staticClass:"data-doc-image"},[s("img",{staticClass:"img-fluid img-thumbnail",attrs:{src:"assets/images/signal/"+t.getSignal(t.account.signal2_id)}})]),t._v(" "),s("ul",{staticClass:"data-doc-actions"},[s("li",[s("a",{attrs:{href:"assets/images/signal/"+t.getSignal(t.account.signal2_id),target:"_blank"}},[s("i",{staticClass:"bi bi-cloud-download text-white"})])])])])])])]):t._e(),t._v(" "),null!=t.getSignal(t.account.signal3_id)?s("div",{staticClass:"col"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("span",{staticClass:"card-title"},[t._v("Signal 3")]),t._v(" "),s("div",{staticClass:"data-doc-item data-doc-item-lg mx-auto my-1"},[s("div",{staticClass:"data-doc-image"},[s("img",{staticClass:"img-fluid img-thumbnail",attrs:{src:"assets/images/signal/"+t.getSignal(t.account.signal3_id)}})]),t._v(" "),s("ul",{staticClass:"data-doc-actions"},[s("li",[s("a",{attrs:{href:"assets/images/signal/"+t.getSignal(t.account.signal3_id),target:"_blank"}},[s("i",{staticClass:"bi bi-cloud-download text-white"})])])])])])])]):t._e(),t._v(" "),null!=t.getSignal(t.account.signal4_id)?s("div",{staticClass:"col"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("span",{staticClass:"card-title"},[t._v("Signal 4")]),t._v(" "),s("div",{staticClass:"data-doc-item data-doc-item-lg mx-auto my-1"},[s("div",{staticClass:"data-doc-image"},[s("img",{staticClass:"img-fluid img-thumbnail",attrs:{src:"assets/images/signal/"+t.getSignal(t.account.signal4_id)}})]),t._v(" "),s("ul",{staticClass:"data-doc-actions"},[s("li",[s("a",{attrs:{href:"assets/images/signal/"+t.getSignal(t.account.signal4_id),target:"_blank"}},[s("i",{staticClass:"bi bi-cloud-download text-white"})])])])])])])]):t._e(),t._v(" "),null!=t.getSignal(t.account.signal5_id)?s("div",{staticClass:"col"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("span",{staticClass:"card-title"},[t._v("Signal 5")]),t._v(" "),s("div",{staticClass:"data-doc-item data-doc-item-lg mx-auto my-1"},[s("div",{staticClass:"data-doc-image"},[s("img",{staticClass:"img-fluid img-thumbnail",attrs:{src:"assets/images/signal/"+t.getSignal(t.account.signal5_id)}})]),t._v(" "),s("ul",{staticClass:"data-doc-actions"},[s("li",[s("a",{attrs:{href:"assets/images/signal/"+t.getSignal(t.account.signal5_id),target:"_blank"}},[s("i",{staticClass:"bi bi-cloud-download text-white"})])])])])])])]):t._e()]):t._e(),t._v(" "),s("div",{staticClass:"modal modal-slide-in fade",attrs:{id:"deposit"}},[s("div",{staticClass:"modal-dialog sidebar-sm"},[s("form",{staticClass:"add-new-record modal-content pt-0",on:{submit:function(a){return a.preventDefault(),t.Deposit()}}},[s("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}},[t._v("\n                    ×\n                ")]),t._v(" "),t._m(9),t._v(" "),s("div",{staticClass:"modal-body flex-grow-1"},[null!=t.wallets?s("div",{staticClass:"dropdown w-auto mb-1"},[s("button",{ref:"DepositWallet",staticClass:"btn btn-outline-warning dropdown-toggle",attrs:{type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}},[t._v("\n                            Select Wallet\n                        ")]),t._v(" "),s("ul",{staticClass:"dropdown-menu dropdown-menu-end"},t._l(t.wallets,(function(a,e){return s("li",{key:e},[s("a",{staticClass:"dropdown-item",on:{click:function(s){return t.SelectDepositWallet(a.symbol)}}},[t._v(t._s(a.symbol)+"\n                                    "+t._s(a.balance)+"\n                                ")])])})),0)]):t._e(),t._v(" "),s("div",{staticClass:"input-group w-auto mb-1"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.DepositAmount,expression:"DepositAmount"}],staticClass:"form-control",attrs:{type:"number",required:"",placeholder:"Amount"},domProps:{value:t.DepositAmount},on:{input:function(a){a.target.composing||(t.DepositAmount=a.target.value)}}}),t._v(" "),s("span",{ref:"DepositAmountSymbol",staticClass:"input-group-text text-light"})]),t._v(" "),s("button",{staticClass:"btn btn-primary data-submit me-1",attrs:{type:"submit"}},[t._v("\n                        Deposit\n                    ")]),t._v(" "),s("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"reset","data-bs-dismiss":"modal",disabled:t.loading}},[t._v("\n                        Cancel\n                    ")])])])])]),t._v(" "),s("div",{staticClass:"modal modal-slide-in fade",attrs:{id:"withdraw"}},[s("div",{staticClass:"modal-dialog sidebar-sm"},[s("form",{staticClass:"add-new-record modal-content pt-0",on:{submit:function(a){return a.preventDefault(),t.Withdraw()}}},[s("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}},[t._v("\n                    ×\n                ")]),t._v(" "),t._m(10),t._v(" "),s("div",{staticClass:"modal-body flex-grow-1"},[s("div",{staticClass:"input-group w-auto mb-1"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.WithdrawAmount,expression:"WithdrawAmount"}],staticClass:"form-control",attrs:{type:"number",required:"",placeholder:"Amount"},domProps:{value:t.WithdrawAmount},on:{input:function(a){a.target.composing||(t.WithdrawAmount=a.target.value)}}}),t._v(" "),s("span",{staticClass:"input-group-text text-light"},[t._v(t._s(t.currency.symbol))])]),t._v(" "),null!=t.wallets?s("div",{staticClass:"dropdown w-auto mb-1"},[s("button",{ref:"WithdrawWallet",staticClass:"btn btn-outline-warning dropdown-toggle",attrs:{type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}},[t._v("\n                            Select Recieving Wallet\n                        ")]),t._v(" "),s("ul",{staticClass:"dropdown-menu dropdown-menu-end"},t._l(t.wallets,(function(a,e){return s("li",{key:e},[s("a",{staticClass:"dropdown-item",attrs:{"data-symbol":a.symbol},on:{click:function(s){return t.SelectWithdrawWallet(a.symbol)}}},[t._v(t._s(a.symbol)+"\n                                    "+t._s(a.balance)+"\n                                ")])])})),0)]):t._e(),t._v(" "),s("button",{staticClass:"btn btn-primary data-submit me-1",attrs:{type:"submit"}},[t._v("\n                        Withdraw\n                    ")]),t._v(" "),s("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"reset","data-bs-dismiss":"modal",disabled:t.loading}},[t._v("\n                        Cancel\n                    ")])])])])]),t._v(" "),s("div",{staticClass:"modal fade",attrs:{id:"InvestmentType",tabindex:"-1","aria-labelledby":"InvestmentType","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered modal-lg"},[s("div",{staticClass:"modal-content"},[t._m(11),t._v(" "),s("div",{staticClass:"modal-body pb-3 px-sm-3"},[t._l(t.forex_investment,(function(a,e){return[s("a",{key:e,staticStyle:{},on:{click:function(s){return t.selectInvestment(a.id,a.title)}}},[s("div",{staticClass:"row bg-wallet p-1 rounded mb-1",class:1==a.id?"bg-wallet-active":""},[s("div",{staticClass:"col-2"},[s("img",{staticClass:"rounded-circle shadow-4",staticStyle:{width:"64px"},attrs:{src:"assets/images/forex/investment/"+a.image}})]),t._v(" "),s("div",{staticClass:"col-10"},[s("div",{staticClass:"d-flex justify-content-between"},[s("div",{staticClass:"fw-bold fs-4 text-white"},[t._v("\n                                            "+t._s(a.title)+"\n                                            "),1==a.is_new?s("span",{staticClass:"fs-6 badge bg-success text-white"},[t._v("New")]):t._e()]),t._v(" "),s("div",{staticClass:"fs-6 text-white d-none d-md-block"},[s("i",{staticClass:"bi bi-clock"}),t._v("\n                                            "+t._s(a.duration)+" Days\n                                        ")])]),t._v(" "),s("div",{staticClass:"row"},[s("small",{staticClass:"fs-6 text-warning"},[t._v(t._s(a.desc))]),t._v(" "),s("div",[t._v("\n                                            Return on Investment:\n                                            "),s("span",{staticClass:"text-success"},[t._v(t._s(a.roi)+"%")])])])])])])]}))],2)])])])])}),[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("h6",{staticClass:"badge badge-light-success profile-badge"},[t._v("\n                            Verified Trader\n                        ")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"icon-bg bg-light-primary mb-1"},[a("div",{staticClass:"avatar-content"},[a("i",{staticClass:"bi bi-briefcase font-medium-5"})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"icon-bg bg-light-warning mb-1"},[a("div",{staticClass:"avatar-content"},[a("i",{staticClass:"bi bi-diagram-3 font-medium-5"})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"icon-bg bg-light-info mb-1"},[a("div",{staticClass:"avatar-content"},[a("i",{staticClass:"bi bi-node-plus font-medium-5"})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"icon-bg bg-light-success mb-1"},[a("div",{staticClass:"avatar-content"},[a("i",{staticClass:"bi bi-node-plus-fill font-medium-5"})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[s("h4",{staticClass:"card-title"},[t._v("\n                                Forex Account Details\n                            ")])]),t._v(" "),s("div",{staticClass:"card-body text-center"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"card-header"},[s("h4",{staticClass:"card-title"},[t._v("Forex Transactions")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",{staticClass:"table-dark"},[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("Plan")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Amount")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Profit")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Duration")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Status")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("tr",[s("td",{staticClass:"text-muted text-center",attrs:{colspan:"100%"}},[s("img",{attrs:{height:"128px",width:"128px",src:"https://assets.staticimg.com/pro/2.0.4/images/empty.svg",alt:""}}),t._v(" "),s("p",{},[t._v("No Data Found")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"modal-header mb-1"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("\n                        Deposit To Forex\n                    ")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"modal-header mb-1"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("\n                        Withdraw From Forex\n                    ")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal-header bg-transparent"},[a("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})])}],!1,null,"20f0a2aa",null).exports}}]);