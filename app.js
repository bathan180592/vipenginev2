    // Số liệu theo spec "SC1 - VIP ENGINE V2". VIP13 (K) chỉ nhận theo lời mời: các ngưỡng nạp/cược = null.
    const VIP=[
      {level:0,rank:"0",min:0,stake:0,maintainDep:0,maintainStake:0,reward:0,lixi:0,regS:.005,regO:.005,daily:0,dCap:0,weekly:0,wCap:0},
      {level:1,rank:"A",min:3e6,stake:15e6,maintainDep:2e6,maintainStake:6e6,reward:25e3,lixi:10e3,regS:.005,regO:.005,daily:.02,dCap:25e3,weekly:.06,wCap:100e3},
      {level:2,rank:"2",min:10e6,stake:50e6,maintainDep:6e6,maintainStake:20e6,reward:75e3,lixi:25e3,regS:.0055,regO:.005,daily:.0225,dCap:75e3,weekly:.065,wCap:300e3},
      {level:3,rank:"3",min:50e6,stake:250e6,maintainDep:30e6,maintainStake:100e6,reward:15e4,lixi:50e3,regS:.006,regO:.0055,daily:.025,dCap:3e5,weekly:.07,wCap:1.2e6},
      {level:4,rank:"4",min:150e6,stake:750e6,maintainDep:100e6,maintainStake:300e6,reward:5e5,lixi:100e3,regS:.007,regO:.006,daily:.0275,dCap:1.5e6,weekly:.075,wCap:6e6},
      {level:5,rank:"5",min:700e6,stake:3.5e9,maintainDep:400e6,maintainStake:1.7e9,reward:2.5e6,lixi:200e3,regS:.008,regO:.0065,daily:.03,dCap:3.5e6,weekly:.08,wCap:14e6},
      {level:6,rank:"6",min:1.8e9,stake:8e9,maintainDep:1e9,maintainStake:3e9,reward:7.5e6,lixi:500e3,regS:.009,regO:.007,daily:.0325,dCap:15e6,weekly:.085,wCap:60e6},
      {level:7,rank:"7",min:5e9,stake:15e9,maintainDep:2e9,maintainStake:5e9,reward:21e6,lixi:1e6,regS:.01,regO:.0075,daily:.035,dCap:25e6,weekly:.09,wCap:100e6},
      {level:8,rank:"8",min:9e9,stake:45e9,maintainDep:3e9,maintainStake:15e9,reward:50e6,lixi:2e6,regS:.011,regO:.008,daily:.04,dCap:40e6,weekly:.10,wCap:160e6},
      {level:9,rank:"9",min:15e9,stake:75e9,maintainDep:5e9,maintainStake:25e9,reward:86e6,lixi:4e6,regS:.012,regO:.0085,daily:.045,dCap:70e6,weekly:.11,wCap:280e6},
      {level:10,rank:"10",min:25e9,stake:125e9,maintainDep:8e9,maintainStake:40e9,reward:100e6,lixi:8e6,regS:.013,regO:.009,daily:.05,dCap:150e6,weekly:.12,wCap:600e6},
      {level:11,rank:"J",min:40e9,stake:200e9,maintainDep:13e9,maintainStake:65e9,reward:120e6,lixi:16e6,regS:.014,regO:.0095,daily:.055,dCap:250e6,weekly:.13,wCap:1e9},
      {level:12,rank:"Q",min:65e9,stake:325e9,maintainDep:20e9,maintainStake:100e9,reward:150e6,lixi:25e6,regS:.015,regO:.01,daily:.0575,dCap:350e6,weekly:.14,wCap:1.4e9},
      {level:13,rank:"K",invite:true,min:null,stake:null,maintainDep:null,maintainStake:null,reward:200e6,lixi:50e6,regS:.016,regO:.0105,daily:.06,dCap:550e6,weekly:.15,wCap:2.2e9}
    ];
    const CATEGORIES=[
      {id:"sports",icon:"the-thao",name:"Thể thao",K:7.18126,C:1,Ld:.2741422,Lw:.1072579,group:"sports"},
      {id:"live",icon:"live-casino",name:"Live Casino",K:13.07935,C:0,Ld:.2404312,Lw:.0993127,group:"other"},
      {id:"card",icon:"game-bai",name:"Game bài",K:10.33291,C:0,Ld:.2314956,Lw:.0976916,group:"other"},
      {id:"lottery",icon:"quay-so",name:"Lô đề/Quay số",K:9.97272,C:1,Ld:.2353317,Lw:.0995585,group:"other"},
      {id:"slots",icon:"slots",name:"Slots",K:18.83111,C:.25,Ld:.2186932,Lw:.0821351,group:"other"},
      {id:"cock",icon:"da-ga",name:"Đá gà",K:9.33114,C:1,Ld:.2236073,Lw:.0879542,group:"other"},
      {id:"fishing",icon:"ban-ca",name:"Bắn cá",K:13.96856,C:0,Ld:.1483198,Lw:.0680044,group:"other"},
      {id:"jackpot",icon:"no-hu",name:"Nổ hũ",K:15.24048,C:1,Ld:.2027341,Lw:.0804927,group:"other"}
    ];
    const MIX={id:"mix",name:"Không chọn – Mix",K:9.73984,C:.5926225,Ld:.2593184,Lw:.0994286,group:"mix"};
    const PACKAGES={regular:{name:"Hoàn trả theo tổng cược",icon:"hoan-tra-tong-cuoc",desc:"Nhận hoàn trả dựa trên tổng cược hợp lệ, không phụ thuộc kết quả thắng thua.",cycle:"Hằng ngày"},daily:{name:"Bảo hiểm cược theo ngày",icon:"bao-hiem-cuoc-thua",desc:"Nhận hoàn trả theo kết quả thua ròng hợp lệ được tổng kết trong ngày.",cycle:"Hằng ngày"},weekly:{name:"Bảo hiểm cược theo tuần",icon:"chu-ky-tuan",desc:"Gộp kết quả thua ròng hợp lệ trong tuần trước khi tính hoàn trả.",cycle:"Hằng tuần"}};
    const USERS={guest:{logged:false,vip:null,name:null,deposit:0,stake:0,active:"regular",pending:null},vip0:{logged:true,vip:0,name:"vip_starter",deposit:1.2e6,stake:5.8e6,active:"regular",pending:null},vip3:{logged:true,vip:3,name:"118813_bathan",deposit:72.6e6,stake:418.4e6,active:"regular",pending:null}};
    let state="vip3",selectedTier=3,selectedPackage=null,selectedCategories=new Set(),authIntent="login";
    const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
    const money=n=>new Intl.NumberFormat("vi-VN",{maximumFractionDigits:0}).format(Math.max(0,n||0))+" VND";
    const pct=n=>(n*100).toLocaleString("vi-VN",{maximumFractionDigits:2})+"%";
    // Ảnh thẻ bài đặt tên theo level + rank: vip-01-a.png … vip-13-k.png. VIP0 không có thẻ.
    const badgeSrc=v=>`assets/badges/vip-${String(v.level).padStart(2,"0")}-${v.rank.toLowerCase()}.png`;
    const badgeImg=v=>`<img class="vip-badge-img" src="${badgeSrc(v)}" alt="Thẻ ${v.rank} · ${vipName(v.level)}">`;
    // Hạn chế nhắc số 13: hạng cao nhất gọi theo chất bài K. Dữ liệu và logic vẫn dùng level 13.
    const vipName=n=>n===13?"VIP K":n===0?"hạng Thành viên":"VIP "+n;
    const iconImg=slug=>`<img class="ic" src="assets/icons/icon-${slug}.png" alt="">`;
    const user=()=>USERS[state];const nextMonth=()=>{const d=new Date();return new Date(d.getFullYear(),d.getMonth()+1,1).toLocaleDateString("vi-VN",{day:"2-digit",month:"2-digit",year:"numeric"})};
    function openOverlay(id){$("#"+id).classList.add("show");document.body.classList.add("no-scroll")}
    function closeOverlay(el){el.closest(".overlay").classList.remove("show");if(!$(".overlay.show"))document.body.classList.remove("no-scroll")}
    function toast(title,text){$("#toastTitle").textContent=title;$("#toastText").textContent=text;$("#toast").classList.add("show");setTimeout(()=>$("#toast").classList.remove("show"),3000)}
    function renderAll(){const u=user();selectedTier=u.logged&&u.vip>0?u.vip:1;$$(".state-btn").forEach(b=>b.classList.toggle("active",b.dataset.state===state));$("#accountActions").innerHTML=u.logged?`<button class="icon-btn">⌕</button><button class="icon-btn">♟</button><button class="btn btn-secondary">${u.name}${u.vip>0?" · "+vipName(u.vip):" · THÀNH VIÊN"}</button><button class="btn btn-primary" id="logout">ĐĂNG XUẤT</button>`:`<button class="icon-btn">⌕</button><button class="icon-btn">♟</button><button class="btn btn-secondary auth-open">ĐĂNG NHẬP</button><button class="btn btn-primary auth-open">ĐĂNG KÝ</button>`;renderUserPanel();renderLadder();renderPackageSummary();bindDynamic()}
    function renderUserPanel(){const u=user(),p=$("#userPanel");if(!u.logged){p.innerHTML=`<div class="guest-prompt"><div><div class="kicker">Quyền lợi của bạn</div><h3>Đăng nhập để xem hạng VIP và tiến độ cá nhân</h3><p>Hệ thống sẽ hiển thị quyền lợi, điều kiện duy trì và phương án hoàn trả hiện tại.</p></div><div class="actions"><button class="btn btn-secondary auth-open">Đăng nhập</button><button class="btn btn-primary auth-open">Đăng ký ngay</button></div></div>`;return}const v=VIP[u.vip],next=VIP[u.vip===0?1:Math.min(13,u.vip+1)],dp=u.vip===13?100:Math.min(100,u.deposit/next.min*100),sp=u.vip===13?100:Math.min(100,u.stake/next.stake*100);const badge=u.vip===0?`<div class="mini-badge neutral"><strong>—</strong><span>THÀNH VIÊN</span></div>`:`<div class="mini-badge">${badgeImg(v)}</div>`;p.innerHTML=`<div class="user-summary">${badge}<div><div class="kicker">Hạng của bạn</div><h3>${u.vip===0?"Chưa đạt hạng VIP":vipName(u.vip)}</h3><p>${u.vip===13?"Hạng hội viên cao nhất":u.vip===0?"Đang tiến tới VIP 1":"Kỳ duy trì đến 30/09/2026"}</p></div></div><div class="progress-wrap">${u.vip===13?`<div class="progress-note"><strong>Bạn đang ở hạng cao nhất.</strong><br>Tiếp tục duy trì hoạt động để giữ trọn đặc quyền.</div>`:`<div><div class="progress-head"><b>Tổng nạp</b><span>${money(u.deposit)} / ${money(next.min)}</span></div><div class="bar"><span style="width:${dp}%"></span></div></div><div><div class="progress-head"><b>Cược hợp lệ</b><span>${money(u.stake)} / ${money(next.stake)}</span></div><div class="bar"><span style="width:${sp}%"></span></div></div><div class="progress-note">Còn <strong>${money(Math.max(0,next.min-u.deposit))}</strong> tiền nạp và <strong>${money(Math.max(0,next.stake-u.stake))}</strong> cược để lên ${vipName(next.level)}.</div>`}</div><div class="panel-cta"><button class="btn btn-gold estimator-trigger">Ước tính quyền lợi</button><button class="btn btn-secondary" data-scroll="#ladder">${u.vip===0?"Xem quyền lợi VIP 1":"Xem quyền lợi hiện tại"}</button><small>Cập nhật gần nhất: 10:32 hôm nay</small></div>`}
    function renderLadder(){const u=user(),cur=u.logged?u.vip:-1;$("#ladderList").innerHTML=VIP.filter(v=>v.level>0).map(v=>`<button class="tier ${v.level===13?"vip13 ":""}${v.level<cur?"done ":""}${v.level===cur?"current ":""}${v.level>cur&&cur>=0?"locked ":""}${v.level===selectedTier?"selected":""}" data-tier="${v.level}">${badgeImg(v)}<span class="level">${vipName(v.level)}</span></button>`).join("");renderTierDetail()}
    function renderTierDetail(){const u=user(),cur=u.logged?u.vip:-1,v=VIP[selectedTier],levels=selectedTier===1?[1,2,3]:selectedTier===13?[11,12,13]:[selectedTier-1,selectedTier,selectedTier+1],tiers=levels.map(i=>VIP[i]);$("#ladderTitle").textContent=v.invite?"So sánh nhóm hạng cao nhất · Thẻ K quyền lực":`So sánh quanh ${vipName(v.level)}`;const context=t=>t.level===selectedTier?`<span class="compare-context focus">ĐANG XEM</span>`:t.level===cur?`<span class="compare-context current">HẠNG CỦA BẠN</span>`:cur>=0&&t.level>cur?`<span class="compare-context locked">CHƯA MỞ KHÓA</span>`:!u.logged?`<span class="compare-context ghost" aria-hidden="true">·</span>`:`<span class="compare-context">${t.level<selectedTier?"HẠNG LIỀN TRƯỚC":"HẠNG LIỀN SAU"}</span>`;const lastLevel=tiers[tiers.length-1].level;const valueCell=(html,t,extra="")=>`<div class="compare-cell compare-value ${t.level===selectedTier?"selected-col":""} ${t.level===lastLevel?"last-col":""} ${extra}">${html}</div>`;const row=(label,key,format,extra="")=>`<div class="${extra?extra+" ":""}compare-cell compare-label">${label}</div>${tiers.map(t=>valueCell(t[key]==null?`<strong class="invite-text">Lời mời</strong>`:`<strong>${format(t[key])}</strong>`,t,extra)).join("")}`;// Tiêu đề nhóm gộp hết các cột (grid-column:1/-1) nên không cần ô đệm ở cột giá trị
    const group=(label,cashback=false)=>`<div class="compare-cell compare-label section-label ${cashback?"cashback-label":""}">${label}</div>`;$("#tierDetail").innerHTML=`<div class="comparison-wrap"><div class="comparison-toolbar"><div><h3>So sánh quyền lợi theo hạng</h3><p>Chi tiết quyền lợi của từng hạng VIP.</p></div><div class="compare-nav"><button id="prevCompare" aria-label="Hạng trước" ${selectedTier===1?"disabled":""}>←</button><button id="nextCompare" aria-label="Hạng sau" ${selectedTier===13?"disabled":""}>→</button></div></div><div class="compare-table"><div class="compare-cell compare-label tier-head"><span>HẠNG MỤC</span><small>Chi tiết quyền lợi</small></div>${tiers.map(t=>valueCell(`<div class="compare-rank">${badgeImg(t)}</div><div class="compare-vip">${vipName(t.level)}</div>${context(t)}`,t).replace("compare-value","compare-value tier-head")).join("")}${group("01 · Điều kiện thăng hạng")}${row("Tổng nạp thăng hạng","min",money)}${row("Tổng cược thăng hạng","stake",money)}${group("02 · Điều kiện duy trì hạng")}${row("Tổng nạp duy trì / 3 tháng","maintainDep",money)}${row("Tổng cược duy trì / 3 tháng","maintainStake",money)}${group("03 · Hoàn trả theo tổng cược",true)}${row("Tỷ lệ · Thể thao","regS",pct,"cashback-row")}${row("Tỷ lệ · Các thể loại khác","regO",pct,"cashback-row")}${group("04 · Bảo hiểm cược theo ngày",true)}${row("Tỷ lệ hoàn","daily",pct,"cashback-row")}${row("Giới hạn mỗi ngày","dCap",money,"cashback-row")}${group("05 · Bảo hiểm cược theo tuần",true)}${row("Tỷ lệ hoàn","weekly",pct,"cashback-row")}${row("Giới hạn mỗi tuần","wCap",money,"cashback-row")}${group("06 · Quyền lợi khác")}${row("Thưởng thăng hạng","reward",money)}${row("Lì xì theo hạng","lixi",money)}<div class="compare-cell compare-label">Chăm sóc hội viên</div>${tiers.map(t=>valueCell(`<strong>${t.level>=10?"Chuyên viên VIP riêng":t.level>=3?"Hỗ trợ ưu tiên":"Hỗ trợ tiêu chuẩn"}</strong>`,t)).join("")}</div></div>`;$("#prevCompare").onclick=()=>{if(selectedTier>1){selectedTier--;renderLadder()}};$("#nextCompare").onclick=()=>{if(selectedTier<13){selectedTier++;renderLadder()}};}
    function renderPackageSummary(){const u=user(),box=$("#activePackage");if(!u.logged){box.innerHTML=`<div class="package-icon">♟</div><div><h4>Đăng nhập để xem phương án của bạn</h4><p>Chọn cách nhận hoàn trả sau khi xác thực tài khoản.</p></div><span class="status-pill">CẦN ĐĂNG NHẬP</span>`;return}const active=PACKAGES[u.active],pending=u.pending?PACKAGES[u.pending]:null;box.innerHTML=`<div class="package-icon">${iconImg(active.icon)}</div><div><h4>${active.name}</h4><p>${pending?`Đang dùng đến hết kỳ · Kỳ tới: ${pending.name}`:"Phương án hoàn trả đang sử dụng"}</p></div><span class="status-pill ${pending?"pending":""}">${pending?"ĐÃ CHỌN KỲ TỚI":"ĐANG SỬ DỤNG"}</span>`}
    function bindDynamic(){$$(".auth-open").forEach(b=>b.onclick=()=>openOverlay("authOverlay"));if($("#logout"))$("#logout").onclick=()=>{state="guest";renderAll();toast("Đã đăng xuất","Bạn đang xem trang VIP ở trạng thái khách.")};$$(".estimator-trigger").forEach(b=>b.onclick=handleEstimator);$$("[data-scroll]").forEach(b=>b.onclick=()=>$(b.dataset.scroll).scrollIntoView({behavior:"smooth",block:"start"}))}
    function renderPackageModal(){const u=user(),v=VIP[u.vip],names=["regular","daily","weekly"];$("#cashbackSubtitle").textContent=u.vip===0?"Bạn chưa đạt hạng VIP. Hai phương án bảo hiểm cược được mở khóa từ VIP 1.":"Mỗi tài khoản sử dụng một phương án. Lựa chọn mới áp dụng từ kỳ tiếp theo.";$("#packageGrid").innerHTML=names.map(key=>{const p=PACKAGES[key],locked=u.vip===0&&key!=="regular",active=u.active===key,pending=u.pending===key;const rate=key==="regular"?`Lên tới ${pct(Math.max(v.regS,v.regO))}`:key==="daily"?pct(v.daily):pct(v.weekly);const cap=key==="regular"?"Không giới hạn":key==="daily"?money(v.dCap)+" / ngày":money(v.wCap)+" / tuần";return `<article class="package-card ${locked?"locked":""} ${active?"active":""} ${pending?"selected":""}" data-package="${key}"><span class="card-status ${locked?"locked":active?"active":""}">${locked?"🔒 MỞ KHÓA TỪ VIP 1":pending?"ÁP DỤNG KỲ TỚI":active?"ĐANG DÙNG":"CÓ THỂ CHỌN"}</span><div class="package-icon">${iconImg(p.icon)}</div><h4>${p.name}</h4><p>${p.desc}</p><div class="package-metric"><div class="data-row"><span>Chu kỳ</span><b>${p.cycle}</b></div><div class="data-row"><span>${u.vip===0?"Tỷ lệ thành viên":"Tỷ lệ "+vipName(u.vip)}</span><b>${rate}</b></div><div class="data-row"><span>Giới hạn</span><b>${cap}</b></div></div>${locked?`<div class="locked-note">Bạn cần thêm ${money(Math.max(0,VIP[1].min-u.deposit))} tiền nạp để đạt VIP 1.</div>`:`<button class="btn ${active?"btn-secondary":"btn-ghost"} package-select" ${active&&!pending?"disabled":""}>${pending?"Đã chọn cho kỳ tới":active?"Đang sử dụng":"Chọn gói này"}</button>`}</article>`}).join("");selectedPackage=u.pending||null;$("#continuePackage").disabled=!selectedPackage||selectedPackage===u.active;$$(".package-card").forEach(card=>card.onclick=()=>{const key=card.dataset.package;if(u.vip===0&&key!=="regular"){toast("Mở khóa từ VIP 1","Hãy đạt VIP 1 để sử dụng bảo hiểm cược.");return}if(key===u.active&&!u.pending)return;selectedPackage=key;$$(".package-card").forEach(c=>c.classList.toggle("selected",c.dataset.package===key));$("#continuePackage").disabled=key===u.active})}
    function handleEstimator(){if(!user().logged){authIntent="estimator";openOverlay("authOverlay")}else openEstimator()}
    function openEstimator(){selectedCategories.clear();renderCategoryGrid();$("#depositInput").value="50.000.000";$("#estimateEmpty").classList.remove("hidden");$("#estimateResult").classList.remove("show");openOverlay("estimatorOverlay")}
    function renderCategoryGrid(){$("#categoryGrid").innerHTML=CATEGORIES.map(c=>`<button class="category ${selectedCategories.has(c.id)?"active":""}" data-category="${c.id}">${iconImg(c.icon)}<span>${c.name}</span></button>`).join("");$$(".category").forEach(b=>b.onclick=()=>{selectedCategories.has(b.dataset.category)?selectedCategories.delete(b.dataset.category):selectedCategories.add(b.dataset.category);renderCategoryGrid()})}
    // Liệt kê trọn bộ quyền lợi của một hạng, dùng cho kết quả Estimator.
    // Ba phương án hoàn trả xếp cùng một hàng để thấy rõ là chọn 1 trong 3.
    function perksHtml(t){
      const chuaVIP=t.level===0,khoa="Mở khóa từ VIP 1";
      const opt=(icon,ten,giatri,phu,mo=false)=>`<div class="opt${mo?" locked":""}">${iconImg(icon)}<div class="oname">${ten}</div><div class="oval">${giatri}</div><div class="osub">${phu}</div></div>`;
      const row=(icon,nhan,giatri,mo=false)=>`<div class="perk${mo?" locked":""}">${iconImg(icon)}<div><span>${nhan}</span><b>${giatri}</b></div></div>`;
      const chamSoc=t.level>=10?"Chuyên viên VIP riêng":t.level>=3?"Hỗ trợ ưu tiên":"Hỗ trợ tiêu chuẩn";
      const duyTri=t.maintainDep==null?"Theo lời mời riêng":`${money(t.maintainDep)} nạp · ${money(t.maintainStake)} cược`;
      return `<div class="tier-perks"><div class="perks-head">${chuaVIP?"Quyền lợi hạng Thành viên":"Trọn bộ quyền lợi tại "+vipName(t.level)}</div>`+
        `<div class="perks-note">Chủ động chọn gói hoàn trả phù hợp</div><div class="perks-options">`+
        opt("hoan-tra-tong-cuoc","Hoàn trả theo tổng cược",`Lên tới ${pct(Math.max(t.regS,t.regO))}`,`Thể thao ${pct(t.regS)} · khác ${pct(t.regO)}`)+
        opt("bao-hiem-cuoc-thua","Bảo hiểm cược theo ngày",chuaVIP?"—":pct(t.daily),chuaVIP?khoa:`tối đa ${money(t.dCap)} / ngày`,chuaVIP)+
        opt("chu-ky-tuan","Bảo hiểm cược theo tuần",chuaVIP?"—":pct(t.weekly),chuaVIP?khoa:`tối đa ${money(t.wCap)} / tuần`,chuaVIP)+
        `</div><div class="perks-grid">`+
        row("thuong-thang-hang","Thưởng thăng hạng",chuaVIP?khoa:money(t.reward),chuaVIP)+
        row("li-xi","Lì xì theo hạng",chuaVIP?khoa:money(t.lixi),chuaVIP)+
        row("ho-tro-247","Chăm sóc hội viên",chamSoc)+
        row("chu-ky-ngay","Điều kiện duy trì mỗi 3 tháng",chuaVIP?"Chưa áp dụng":duyTri,chuaVIP)+
        `</div></div>`}
    function tierByDeposit(dep){let r=VIP[0];for(const v of VIP)if(!v.invite&&dep>=v.min)r=v;return r}
    function calculate(){
      const input=$("#depositInput"),dep=Number(input.value.replace(/\D/g,""));
      if(!dep||dep>200e9){$("#depositError").classList.add("show");input.focus();return}
      $("#depositError").classList.remove("show");
      const tier=tierByDeposit(dep),cats=selectedCategories.size?CATEGORIES.filter(c=>selectedCategories.has(c.id)):[MIX],part=dep/cats.length;
      let stake=0,eligible=0,dayBase=0,weekBase=0,regularMonth=0;
      cats.forEach(c=>{const s=part*c.K,e=s*c.C;stake+=s;eligible+=e;dayBase+=e*c.Ld;weekBase+=e*c.Lw;const r=c.group==="sports"?tier.regS:c.group==="mix"?(tier.regS*.7773041+tier.regO*(1-.7773041)):tier.regO;regularMonth+=e*r});
      const regular=regularMonth*12,daily=tier.level===0?0:Math.min(dayBase*tier.daily*12,tier.dCap*365.25),weekly=tier.level===0?0:Math.min(weekBase*tier.weekly*12,tier.wCap*52.14286),values={regular,daily,weekly},best=tier.level===0?"regular":Object.keys(values).sort((a,b)=>values[b]-values[a])[0],next=VIP[Math.max(1,Math.min(13,tier.level+1))],cards=[{key:"regular",name:"Hoàn trả theo tổng cược",value:regular},{key:"daily",name:"Bảo hiểm cược theo ngày",value:daily},{key:"weekly",name:"Bảo hiểm cược theo tuần",value:weekly}],unranked=tier.level===0;
      $("#estimateEmpty").classList.add("hidden");
      $("#estimateResult").innerHTML=`<div class="result-hero"><div class="mini-badge ${unranked?"neutral":""}">${unranked?`<strong>—</strong><span>THÀNH VIÊN</span>`:badgeImg(tier)}</div><div><div class="kicker">Hạng dự kiến</div><h4>${unranked?"Chưa đạt hạng VIP":vipName(tier.level)}</h4></div><div class="next-gap">${tier.level===13?`<span>Hạng cao nhất</span><b>Thẻ K quyền lực</b>`:next.invite?`<span>Hạng kế tiếp: Hạng K</span><b>Theo lời mời riêng</b>`:`<span>Cần thêm để lên ${vipName(next.level)}</span><b>${money(next.min-dep)}</b>`}</div></div><div class="result-cards">${cards.map(c=>`<div class="result-card ${c.key===best?"best":""} ${unranked&&c.key!=="regular"?"locked":""}">${c.key===best?`<span class="best-ribbon">ƯỚC TÍNH CAO NHẤT</span>`:""}<div class="rname">${c.name}</div>${unranked&&c.key!=="regular"?`<div class="rvalue">🔒 Mở khóa từ VIP 1</div>`:`<div class="rvalue">${money(c.value)}</div>`}</div>`).join("")}</div>${perksHtml(tier)}<p class="disclaimer">Kết quả chỉ mang tính tham khảo. Quyền lợi thực nhận phụ thuộc cược hợp lệ, kết quả thắng thua, hạng VIP, giới hạn hoàn và điều kiện áp dụng.</p>`;
      $("#estimateResult").classList.add("show")
    }
    $("#openCashback").onclick=()=>{if(!user().logged){authIntent="cashback";openOverlay("authOverlay");return}renderPackageModal();openOverlay("cashbackOverlay")};
    $("#continuePackage").onclick=()=>{if(!selectedPackage)return;$("#confirmCurrent").textContent=PACKAGES[user().active].name;$("#confirmNew").textContent=PACKAGES[selectedPackage].name;$("#confirmDate").innerHTML=`Gói mới sẽ bắt đầu áp dụng từ <b>00:00 ngày ${nextMonth()}</b>.`;$("#cashbackOverlay").classList.remove("show");openOverlay("confirmOverlay")};
    $("#backToPackages").onclick=()=>{$("#confirmOverlay").classList.remove("show");openOverlay("cashbackOverlay")};
    $("#confirmPackage").onclick=()=>{user().pending=selectedPackage;$("#confirmOverlay").classList.remove("show");document.body.classList.remove("no-scroll");renderPackageSummary();toast("Đã ghi nhận lựa chọn",`${PACKAGES[selectedPackage].name} sẽ áp dụng từ ${nextMonth()}.`)};
    $("#toggleDev").onclick=()=>{$("#devtools").classList.toggle("collapsed");$("#toggleDev").textContent=$("#devtools").classList.contains("collapsed")?"+":"−"};
    $$(".state-btn").forEach(b=>b.onclick=()=>{state=b.dataset.state;USERS.vip0.pending=null;USERS.vip3.pending=null;renderAll();toast("Đã đổi trạng thái",b.textContent)});
    $$("[data-close]").forEach(b=>b.onclick=()=>closeOverlay(b));$$(".overlay").forEach(o=>o.addEventListener("mousedown",e=>{if(e.target===o){o.classList.remove("show");document.body.classList.remove("no-scroll")}}));document.addEventListener("keydown",e=>{if(e.key==="Escape"){$(".overlay.show")?.classList.remove("show");document.body.classList.remove("no-scroll")}});
    $$("[data-auth-tab]").forEach(b=>b.onclick=()=>{const reg=b.dataset.authTab==="register";$$(".auth-tab").forEach(x=>x.classList.toggle("active",x===b));$("#authLogin").classList.toggle("hidden",reg);$("#authRegister").classList.toggle("hidden",!reg);$("#authSubmit").textContent=reg?"Đăng ký":"Đăng nhập"});
    $("#authSubmit").onclick=()=>{state="vip0";$("#authOverlay").classList.remove("show");document.body.classList.remove("no-scroll");renderAll();toast("Đăng nhập thành công","Chào mừng bạn đến với Mubet VIP Club.");if(authIntent==="estimator")setTimeout(openEstimator,250);else if(authIntent==="cashback")setTimeout(()=>{renderPackageModal();openOverlay("cashbackOverlay")},250);authIntent="login"};
    $("#depositInput").addEventListener("input",e=>{const n=Number(e.target.value.replace(/\D/g,""));e.target.value=n?new Intl.NumberFormat("vi-VN").format(n):"";$("#estimateResult").classList.remove("show");$("#estimateEmpty").classList.remove("hidden")});
    $$(".preset").forEach(b=>b.onclick=()=>{$("#depositInput").value=new Intl.NumberFormat("vi-VN").format(+b.dataset.amount);$("#depositError").classList.remove("show")});
    $("#calculateEstimate").onclick=calculate;$("#recalculate").onclick=calculate;$$(".subnav a").forEach(a=>a.addEventListener("click",()=>{$$(".subnav a").forEach(x=>x.classList.remove("active"));a.classList.add("active")}));
    /* ===== HERO SLIDER ===== */
    // Ước tính nhanh cho banner 3, dùng đúng công thức của Estimator ở nhánh không chọn thể loại
    function quickEstimate(dep){const tier=tierByDeposit(dep),c=MIX,stake=dep*c.K,eligible=stake*c.C;
      const regular=eligible*(tier.regS*.7773041+tier.regO*(1-.7773041))*12;
      const daily=tier.level===0?0:Math.min(eligible*c.Ld*tier.daily*12,tier.dCap*365.25);
      const weekly=tier.level===0?0:Math.min(eligible*c.Lw*tier.weekly*12,tier.wCap*52.14286);
      return{tier,best:Math.max(regular,daily,weekly)}}
    const HERO_DEPOSIT=150e6,SLIDE_MS=6500,CALC_SLIDE=2;
    let heroIndex=0,heroTimer=null,calcRAF=null,calcDelay=null;
    function stopCalc(){cancelAnimationFrame(calcRAF);clearTimeout(calcDelay);calcRAF=calcDelay=null}
    function runCalc(){stopCalc();const est=quickEstimate(HERO_DEPOSIT),t0=performance.now(),DUR=2100;
      const frame=now=>{const p=Math.min(1,(now-t0)/DUR),e=1-Math.pow(1-p,3);
        $("#calcDeposit").textContent=money(HERO_DEPOSIT*e);
        $("#calcProgress").style.width=(e*100).toFixed(1)+"%";
        $("#calcTier").textContent=p<.45?"—":est.tier.rank===String(est.tier.level)?vipName(est.tier.level):`${vipName(est.tier.level)} · ${est.tier.rank}`;
        $("#calcTotal").textContent=money(est.best*Math.max(0,Math.min(1,(p-.45)/.55)));
        if(p<1)calcRAF=requestAnimationFrame(frame);else calcDelay=setTimeout(runCalc,1600)};
      calcRAF=requestAnimationFrame(frame)}
    function heroGo(n){const frames=$$(".hero-bg figure"),items=$$(".hero-item"),dots=$$(".hero-dot");
      heroIndex=(n+frames.length)%frames.length;
      frames.forEach((f,i)=>f.classList.toggle("active",i===heroIndex));
      items.forEach((f,i)=>f.classList.toggle("active",i===heroIndex));
      $$(".hero-badges .hero-badge").forEach((b,i)=>b.classList.toggle("active",i===heroIndex));
      dots.forEach((d,i)=>{d.classList.toggle("active",i===heroIndex);d.setAttribute("aria-selected",i===heroIndex)});
      const calc=$("#heroCalc");calc.classList.toggle("show",heroIndex===CALC_SLIDE);
      if(heroIndex===CALC_SLIDE)runCalc();else stopCalc()}
    function heroPlay(){clearInterval(heroTimer);if(matchMedia("(prefers-reduced-motion:reduce)").matches)return;heroTimer=setInterval(()=>heroGo(heroIndex+1),SLIDE_MS)}
    function heroJump(n){heroGo(n);heroPlay()}
    (function initHero(){const hero=$(".hero");if(!hero)return;
      $("#heroDots").innerHTML=$$(".hero-item").map((_,i)=>`<button class="hero-dot" role="tab" aria-label="Banner ${i+1}" data-hero="${i}"></button>`).join("");
      $$(".hero-dot").forEach(d=>d.onclick=()=>heroJump(+d.dataset.hero));
      hero.addEventListener("mouseenter",()=>clearInterval(heroTimer));
      hero.addEventListener("mouseleave",()=>heroPlay());
      document.addEventListener("visibilitychange",()=>document.hidden?clearInterval(heroTimer):heroPlay());
      heroGo(0);heroPlay()})();
    // Delegation: #ladderList cố định còn các nút .tier bị dựng lại sau mỗi lần chọn, gắn trực tiếp sẽ mất listener
    $("#ladderList").addEventListener("click",e=>{const b=e.target.closest(".tier");if(!b)return;selectedTier=+b.dataset.tier;renderLadder()});
    renderCategoryGrid();renderAll();
  
