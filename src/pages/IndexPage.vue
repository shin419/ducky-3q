<template>
  <q-page>
    <q-tabs
      v-model="tab"
      dense
      mobile-arrows
      class="bg-green text-white shadow-2"
      active-color="white"
      indicator-color="white"
      align="justify"
    >
      <q-tab name="users" icon="perm_identity" />
      <q-tab name="cards" icon="flutter_dash" @click="getCards()" />
    </q-tabs>

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="users">
        <div class="row q-mb-sm">
          <q-input outlined v-model="userId" square dense label="Tên người chơi" class="col-10" />
          <q-space></q-space>
          <div class="col-2 q-pl-sm row">
            <q-btn color="green" icon="add" square dense class="col-12" @click="addUser()" />
          </div>
        </div>

        <div class="row q-mb-sm">
          <q-select
            filled
            v-model="userWin"
            multiple
            :options="optionUsers"
            option-value="id"
            option-label="id"
            class="col-12"
            label="You win"
            emit-value
            map-options
          >
            <template v-slot:selected-item="scope">
              <q-chip
                removable
                dense
                @remove="scope.removeAtIndex(scope.index)"
                :tabindex="scope.tabindex"
                color="white"
                text-color="secondary"
                class="q-ma-none"
              >
                <q-avatar v-if="scope.opt.avatar" color="secondary" text-color="white">
                  <img :src="scope.opt.avatar">
                </q-avatar>
                <q-avatar v-else color="secondary" text-color="white" icon="perm_identity" />
                {{ scope.opt.id }}
              </q-chip>
            </template>
          </q-select>

          <div class="row col-12 q-mt-sm">
            <q-select
              filled
              v-model="userLost"
              multiple
              :options="optionUsers"
              option-value="id"
              option-label="id"
              class="col-10"
              label="You lost"
              emit-value
              map-options
            >
              <template v-slot:selected-item="scope">
                <q-chip
                  removable
                  dense
                  @remove="scope.removeAtIndex(scope.index)"
                  :tabindex="scope.tabindex"
                  color="white"
                  text-color="secondary"
                  class="q-ma-none"
                >
                  <q-avatar v-if="scope.opt.avatar" color="secondary" text-color="white">
                    <img :src="scope.opt.avatar">
                  </q-avatar>
                  <q-avatar v-else color="secondary" text-color="white" icon="perm_identity" />
                  {{ scope.opt.id }}
                </q-chip>
              </template>
            </q-select>
            <q-space></q-space>
            <div class="col-2 q-pl-sm row">
              <q-btn color="green" icon="add" square dense class="col-12" @click="updateUser()" />
            </div>
          </div>
        </div>

        <div v-for="(user, key, i) in listUser" :key="key" class="q-pa-sm">
          <div class="row justify-between items-center">
            <div class="col-12 row">
              <div class="text-bold">
                Top {{i + 1}} - {{ key }}
                <q-badge align="top" v-if="i === 0" color="green">
                  <q-icon name="emoji_events" />
                </q-badge>
              </div>
              <q-space></q-space>
              <div style="font-size: 10px">
                {{getLastUpdate(user.updated || 0) || ""}}
              </div>
            </div>
            <div class="col-12 row">
              <div class="col-4">Tổng số tiền ăn được</div>
              <div class="col-4 q-pl-md text-bold">
                {{formatNumber((user.money || 0))}} VND
                <q-popup-edit v-model="user.money" v-slot="scope">
                  <q-input
                    autofocus
                    outlined
                    dense
                    v-model="scope.value"
                    :model-value="scope.value"
                  >
                    <template v-slot:after>
                      <q-btn
                        flat dense color="negative" icon="cancel"
                        @click.stop.prevent="scope.cancel"
                      />

                      <q-btn
                        flat dense color="positive" icon="check_circle"
                        @click.stop.prevent="updateMoney(key, user, scope.value)"
                        v-close-popup
                      />
                    </template>
                  </q-input>
                </q-popup-edit>
              </div>
              <div class="col-4 row justify-end">
                <div style="font-size: 8px">
                  Tính từ ngày 13/07/2025
                </div>
              </div>
            </div>
            <div class="col-12 row justify-between items-center">
              <div class="col-4">Tham gia</div>
              <div class="col-4 q-pl-md">{{user.svtg || 0}}</div>
              <div class="col-4 row justify-end">
                <!--            <q-btn flat icon="add" size="sm" @click="update(key, user, 'svtg')" />-->
                <!--            <q-btn flat icon="remove" size="sm"  @click="update(key, user, 'svtg', true)" />-->
              </div>
            </div>
            <div class="col-12 row justify-between items-center">
              <div class="col-4">Tỉ lệ thắng</div>
              <div class="col-4 q-pl-md">{{user.ttl || 0}} / {{user.svtg || 0}}</div>
              <div class="col-4 row justify-end">
              </div>
            </div>
            <div class="col-12 row justify-between items-center">
              <div class="col-4">Tỉ lệ thua</div>
              <div class="col-4 q-pl-md">{{(user.svtg || 0) - (user.ttl || 0)}} / {{user.svtg || 0}}</div>
              <div class="col-4 row justify-end">
                <q-btn flat icon="add" size="sm" @click="update(key, user, 'svtg')" />
                <q-btn flat icon="remove" size="sm"  @click="update(key, user, 'svtg', true)" />
              </div>
            </div>
            <div class="col-12 row justify-between items-center">
              <div class="col-4">Tỉ lệ thắng solo</div>
              <div class="col-4 q-pl-md">{{user.tltsl || 0}} / {{user.svtg || 0}}</div>
              <div class="col-4 row justify-end">
                <q-btn flat icon="add" size="sm" @click="update(key, user, 'tltsl')" />
                <q-btn flat icon="remove"  size="sm" @click="update(key, user, 'tltsl', true)" />
              </div>
            </div>
            <div class="col-12 row justify-between items-center">
              <div class="col-4"> Tỉ lệ thắng team</div>
              <div class="col-4 q-pl-md">{{user.tltt || 0}} / {{user.svtg || 0}}</div>
              <div class="col-4 row justify-end">
                <q-btn flat icon="add"  size="sm" @click="update(key, user, 'tltt')" />
                <q-btn flat icon="remove" size="sm"  @click="update(key, user, 'tltt', true)" />
              </div>
            </div>
          </div>
          <q-separator class="q-mt-md" />
        </div>
      </q-tab-panel>

      <q-tab-panel name="cards">
        <div class="row q-mb-sm">
          <q-input outlined v-model="nameCard" @update:modelValue="searchCard()"
                   debounce="1000" square dense label="Tìm tên tướng" class="col-10" clearable/>
          <q-space></q-space>
          <div class="col-2 q-pl-sm row">
            <q-btn color="green" icon="add" square dense class="col-12" @click="addCard()" />
          </div>
        </div>
        <div class="q-gutter-sm">
          <q-radio v-model="nuoc" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="Thục" label="Thục" />
          <q-radio v-model="nuoc" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="Nguỵ" label="Nguỵ" />
          <q-radio v-model="nuoc" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="Ngô" label="Ngô" />
          <q-radio v-model="nuoc" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="Quần" label="Quần" />
        </div>

        <div v-for="(card, i) in cards" :key="i" class="q-pa-sm">
          <div class="row justify-between items-center">
            <div class="col-12 row">
              <div class="text-bold">
                {{ card.key }}
              </div>
              <q-space></q-space>
              <div style="font-size: 10px">
                {{getLastUpdate(card.updated || 0) || ""}}
              </div>
            </div>
            <div class="col-12 row justify-between items-center">
              <div class="col-4">WIN</div>
              <div class="col-4 q-pl-md">
                {{card.win}}
              </div>
              <div class="col-4 row justify-end">
                <q-btn flat icon="add" size="sm" @click="updateCard(card.key, card, 'win', false)" />
                <q-btn flat icon="remove" size="sm" @click="updateCard(card.key, card, 'win', true)"/>
              </div>
            </div>
          </div>
          <q-separator class="q-mt-md" />
        </div>
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script>
import { getDatabase, ref, set, onValue } from 'firebase/database'
const db = getDatabase()
import moment from 'moment';

export default {
  data() {
    return {
      nuoc: "Thục",
      desert: {
        thuc: false,
        nguy: false,
        ngo: false,
        quan: false
      },
      userId: '',
      tab: 'cards',
      moneyUpdate: 0,
      listUser: [],
      messages: {},
      userWin: [],
      userLost: [],
      optionUsers: [],
      amount: 10000,
      cards: [],
      cardsOrigin: [],
      nameCard: ""
    }
  },

  computed: {
  },
  watch: {
  },
  methods: {
    updateMoney(key, user, money) {
      user = JSON.parse(JSON.stringify(user))
      user.money = money || 0;
      set(ref(db, 'users/' + key), user);
    },
    addUser() {
      if (!this.userId) {
        return;
      }
      set(ref(db, 'users/' + this.userId), {
        ttl: 0,
        tltsl: 0,
        tltt: 0,
        svtg: 0
      })

      this.userId = ""
      this.$q.notify({
        type: 'positive',
        message: 'Thành công rồi!',
        timeout: 500
      });
    },
    updateUser() {
      this.userWin.forEach((key) => {
        let user = this.listUser[key];
        if (this.userWin.length === 1) {
          this.update(key, user, 'tltsl', false, (this.userLost.length * this.amount))
        } else {
          this.update(key, user, 'tltt', false, ((this.userLost.length / this.userWin.length) * this.amount))
        }
      })

      this.userLost.forEach((key) => {
        this.update(key, this.listUser[key], 'svtg', false, -10000)
      })

    },
    update(key, user, field, isRemove, money) {
      let dataUpdate = {
        avatar: user.avatar || "",
        base: user.base || 0,
        ttl: user.ttl,
        tltsl: user.tltsl,
        tltt: user.tltt,
        svtg: user.svtg,
        money: (parseInt(user.money || 0) + parseInt(money || 0)),
        updated: new Date().getTime()
      }

      if (isRemove) {
        dataUpdate[field]--
        if (field !== 'svtg') {
          dataUpdate.ttl--
          dataUpdate.svtg--
        }
      } else {
        dataUpdate[field]++
        if (field !== 'svtg') {
          dataUpdate.ttl++
          dataUpdate.svtg++
        }
      }

      // if (isWinner) {
      //   let lost = ((user.svtg || 0) - (user.ttl || 0)) - user.base
      //   user.money = user.money - (lost * this.amount)
      // }

      set(ref(db, 'users/' + key), dataUpdate);

      if (field === 'svtg') {
        this.$q.notify({
          avatar: 'https://creatorset.com/cdn/shop/files/Screenshot_2024-04-24_173231.png?v=1713973029',
          message: 'Gà!!!!!!!!!!',
          caption: 'Hahaha.......',
          color: 'green',
          timeout: 1000
        });
        // this.speak(this.messages.lost)
      } else {
        // this.speak(this.messages.win)
        // this.$q.notify({
        //   avatar: 'https://i.pinimg.com/originals/54/43/36/5443362c2d3d3af48672c8be7b080afb.jpg',
        //   message: '',
        //   color: 'green',
        //   timeout: 1000
        // });
      }
    },
    getData() {
      onValue(ref(db, '/users'), (snapshot) => {
        const sortedObj = Object.fromEntries(
          Object.entries(snapshot.val()).sort(([, a], [, b]) => b.ttl - a.ttl)
        );
        this.listUser = sortedObj;

        let optionUsers = [];
        Object.keys(sortedObj).forEach(user => {
          optionUsers.push({
            id: user,
            avatar: sortedObj[user].avatar
          })
        })
        this.optionUsers = optionUsers;
      })

      onValue(ref(db, '/messages'), (snapshot) => {
        this.messages = snapshot.val();
      })
    },
    percentageFormatter(a, b) {
      let num = (((a || 0) / (b || 0)) * 100) || 0;
      return new Intl.NumberFormat('default', {
        style: 'percent',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(num / 100);
    },
    speak (text) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'vi-VN';           // Ngôn ngữ: tiếng Việt
      utterance.pitch = 1;                // Độ cao (0 - 2)
      utterance.rate = 1;                 // Tốc độ (0.1 - 10)
      utterance.volume = 1;               // Âm lượng (0 - 1)
      speechSynthesis.speak(utterance);
    },
    getLastUpdate (time) {
      if (!time) {
        return ""
      }
      return moment(time).calendar();
    },
    formatNumber (number) {
      return new Intl.NumberFormat("vi-VN", { maximumSignificantDigits: 3 }).format(
        number,
      )
    },
    addCard() {
      if (!this.nameCard) {
        return;
      }
      set(ref(db, 'cards/' + this.nameCard), {
        win: 1,
        lost: 0,
        nuoc: this.nuoc
      })

      this.nameCard = ""
      this.$q.notify({
        type: 'positive',
        message: 'Giỏi quá !!!',
        timeout: 500
      });
    },
    updateCard(key, card, field, isRemove) {
      card = JSON.parse(JSON.stringify(card));
      delete card.key

      card.updated = new Date().getTime()
      if (isRemove) {
        card[field]--
      } else {
        card[field]++
      }

      set(ref(db, 'cards/' + key), card);

      this.$q.notify({
        type: 'positive',
        message: 'Giỏi quá !!!',
        timeout: 500
      });
    },
    searchCard() {
      let cardsOrigin = JSON.parse(JSON.stringify(this.cardsOrigin));
      if (this.nameCard) {
        const lowerKeyword = this.nameCard.toLowerCase()
        this.cards = cardsOrigin.filter(item => item.key.toLowerCase().includes(lowerKeyword))
        return;
      }

      this.cards = cardsOrigin
    },
    getCards() {
      onValue(ref(db, '/cards'), (snapshot) => {
        const sortedObj = Object.fromEntries(
          Object.entries(snapshot.val()).sort(([, a], [, b]) => b.win - a.lost)
        );
        let cards = []
        Object.keys(sortedObj).forEach(card => {
          sortedObj[card].key = card
          cards.push(sortedObj[card])
        })
        this.cards = cards;
        this.cardsOrigin = cards;

        this.searchCard()
      })
    }
  },

  created() {
  },
  mounted() {
    this.getData()
  },
}
</script>
