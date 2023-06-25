import { Button, Header } from '../../'

const inARestaurant = [
  {
    person: 'Person A',
    hanziAndPinyin:
      ' 你好！我们来这家餐馆吃饭怎么样？(Nǐ hǎo! Wǒmen lái zhè jiā cānguǎn chīfàn zěnmeyàng?)',
    en: 'Hello! How about we eat at this restaurant?'
  },
  {
    person: 'Person B',
    hanziAndPinyin:
      ' 好的，这家餐馆有什么菜？(Hǎo de, zhè jiā cānguǎn yǒu shénme cài?)',
    en: 'Okay, what dishes does this restaurant have?'
  },
  {
    person: 'Person A',
    hanziAndPinyin:
      ' 这家餐馆有米饭、面条和鸡肉。(Zhè jiā cānguǎn yǒu mǐfàn, miàntiáo hé jīròu.)',
    en: 'This restaurant has rice, noodles, and chicken.'
  },
  {
    person: 'Person B',
    hanziAndPinyin: ' 我想吃面条，你呢？(Wǒ xiǎng chī miàntiáo, nǐ ne?)',
    en: 'I want to have noodles. What about you?'
  },
  {
    person: 'Person A',
    hanziAndPinyin: ' 我也想吃面条。(Wǒ yě xiǎng chī miàntiáo.)',
    en: 'I also want to have noodles.'
  },
  {
    person: 'Person B',
    hanziAndPinyin:
      ' 那我们一起点两份面条。(Nà wǒmen yīqǐ diǎn liǎng fèn miàntiáo.)',
    en: "Then let's order two servings of noodles together."
  },
  {
    person: 'Person A',
    hanziAndPinyin:
      ' 好的，服务员，来两份面条。(Hǎo de, fúwùyuán, lái liǎng fèn miàntiáo.)',
    en: 'Okay, waiter, bring two servings of noodles, please.'
  }
]

export function HomePage () {
  return (
    <>
      <Header text='Mandarino' />
      <p>mandarino helps you learn mandarin fast and fun</p>
      <Button
        onClick={() => {
          alert('mandarino')
        }}
        className=''
        text='search'
      />
    </>
  )
}
