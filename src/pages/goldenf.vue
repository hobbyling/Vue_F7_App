<template>
  <f7-page class="GoldenfPage">

    <f7-navbar title="GOLDENF" back-link="$f7router.back()"></f7-navbar>
    <f7-list accordion-list>
      <f7-list-item accordion-item title="关于我们">
        <f7-accordion-content>
          <f7-block>
            <p>GF (Golden F™)身为亚洲博彩游戏商的最佳合作伙伴，专注为客户提供安全、稳定、先进的博娱产品！</p>
            <p>
                我们拥有最专业的技术与运维团队，以及亚洲最先进的云端机房环境。 选择一个靠谱的平台，复制成功经验才是扩大财富最快途径。<br><br>
                不仅仅是包网，还能包平台，以先进的技术手段解决包平台业务的需求，能够对外承接发放包网业务， 我们提供从无到有构建一个能够快速发展的平台，让你能够对外承接包网业务。通过总后台管理你全部的代理站点，使你的利润极大化。
            </p>
            </f7-block>
        </f7-accordion-content>
      </f7-list-item>
      <f7-list-item accordion-item title="服务优势">
        <f7-accordion-content>
          <div class="timeline">

            <div class="timeline-item" v-for="(item, key) in service" :key="key">
              <div class="timeline-item-date">{{item.title}} <br/> {{item.title2}}</div>
              <div class="timeline-item-divider"></div>
              <div class="timeline-item-content">{{item.content}}</div>
            </div>
            
          </div>
        </f7-accordion-content>
      </f7-list-item>
      
      <f7-list-item accordion-item title="API系統">
        <f7-accordion-content>
          <f7-block>
            <p>选择包网服务的客户，可以使用代理系统发展自己的下线代理，而且代理有权为玩家开通帐户，并发展下线。GF代理系统提供API接入技术支持下线代理接入，灵活的代理收益设定、多级代理里设置、多方位查看代理活动、玩家活动、 多功能代理系统， 让你全方位管理和拓展代理市场，通过有效的市场拓展,迅速提高业务效益。</p>
          </f7-block>
        </f7-accordion-content>
      </f7-list-item>
    </f7-list>

  </f7-page>
</template>
<script>
export default {
  data() {
    return {
      service: [
        {
          title: "市场",
          title2: "领导者",
          content:
            "领先全球业界导入在2017年英国伦敦ICE展会一鸣惊人的PG SOFT™并成为PG SOFT™官方认定合作伙伴"
        },
        {
          title: "代理",
          title2: "系统",
          content:
            "多功能代理系统，让您全方位管理和扩展代理市场。 通过有效的市场拓展，迅速提高业务效益。 合众代理系统提供API文档，支持任何系统接入，灵活的代理收益设定。 多级代理设置，多方位查看和监控广告代理和信用代理活动"
        },
        {
          title: "防御",
          title2: "系统",
          content:
            "深知安全的重要性，在系统安全防御方面，我们采用高级CDN立体化防攻击体系。 全面抵御任何类型的DDoS或CC攻击，我们也为客户提供专业的防劫持服务，设置SSL网业认证，确保连线有加密和保证系统安全稳定"
        },
        {
          title: "客服",
          title2: "领导者",
          content:
            "我们拥有24小时专业的运维团队,即时响应问题,全程提供解答疑问,操作指导,攻击防御等后续专业服务"
        },
        {
          title: "平台",
          title2: "多样性",
          content:
            "我们网罗最齐全、最受玩家欢迎的游戏平台，真人视讯、电子游艺、彩票游戏、体育竞技、电子竞技等,集合东西方流行的游戏及类型，不同类型的游戏按客户要求灵活搭配。支持操作员和玩家灵活选择产品，无缝连接各个赌场大厅和钱包"
        },
        {
          title: "支持",
          title2: "平台",
          content: "全方位支持ios、android、windows等平台，随时随地尽在掌握"
        }
      ]
    };
  }
};
</script>
