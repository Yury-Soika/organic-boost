'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { useLanguage } from '../../contexts/LanguageContext';

export default function GrowingCompetitionPage() {
  const { t, language } = useLanguage();

  const content = {
    en: {
      title: 'Growing Competition in the App Store and Google Play',
      subtitle:
        "Understanding the challenges and opportunities in today's mobile app market",
      intro:
        'Every month, competition in mobile stores becomes more intense. No matter the niche, getting to the top positions for target keywords is becoming increasingly difficult. Standard ASO alone is no longer enough to generate large volumes of organic traffic.',
      sections: [
        {
          title: 'The Current State of Mobile App Competition',
          content: `Most competitors in the rankings are already using incentivized keyword installs. Some rely on them more, some less — but the ones who win are those who run traffic at the right scale and with the right strategy.

However, it's important to understand: simply pouring traffic ≠ success. A campaign must not only boost rankings, but also remain profitable so that the business generates revenue. That's why both the quality and cost of installs play a decisive role.`,
        },
        {
          title: 'The Economics of Growth',
          content: `To start generating +50–100 daily organic installs with Organic Boost, an average budget of $200–400 is enough. At this level, you'll already begin seeing the first subscription conversions and a return on your investment.

From there, everything depends on campaign setup and your product itself — especially its ASO optimization (icon, screenshots, texts). Some keywords can bring strong traffic and conversions, while others perform much worse.`,
        },
        {
          title: 'High-Competition Keywords',
          content: `The more competitive a keyword is, the more installs you'll need to secure and maintain a top ranking. This is where pricing becomes crucial:

• Traffic at $0.12–0.15 per install allows you to scale more cost-effectively and reach profitability faster.
• Installs priced at $0.24–0.27 require significantly higher budgets and take longer to break even.

The key is finding the right balance between competition level and cost per install to maximize your return on investment.`,
        },
        {
          title: 'The Organic Boost Approach',
          content: `At Organic Boost, we always follow a proven strategy:

• Test multiple keywords → keep only those that bring real paying users.
• Gradually scale campaigns → maintaining positive unit economics while growing traffic.

As a result, our clients don't just buy installs — they get a self-sustaining growth system that pays for itself and scales without losses.

We focus on quality over quantity, ensuring that every install contributes to your app's long-term success rather than just temporary ranking boosts.`,
        },
        {
          title: 'Why Quality Matters More Than Ever',
          content: `In today's competitive landscape, the quality of your installs directly impacts your app's long-term success. High-quality installs from real devices with proper user behavior patterns not only boost your rankings but also improve your app's overall performance metrics.

This includes:
• Better retention rates
• Higher engagement scores
• Improved conversion rates
• More positive reviews and ratings

These factors work together to create a virtuous cycle of growth, where each quality install helps attract more organic users.`,
        },
      ],
    },
    ru: {
      title: 'Конкуренция в App Store и Google Play растет каждый месяц',
      subtitle:
        'Понимание вызовов и возможностей в современном рынке мобильных приложений',
      intro:
        'Сегодня любая ниша в мобильных сторах становится все более насыщенной. Конкурировать за топовые позиции по ключевым запросам становится сложнее: просто комплексного ASO уже недостаточно, чтобы получать много органического трафика.',
      sections: [
        {
          title: 'Текущее состояние конкуренции в мобильных приложениях',
          content: `Большинство конкурентов в выдаче используют мотивированные установки по ключам. Кто-то использует это больше, кто-то меньше, но выигрывает тот, кто льет трафик и правильно, и в нужных объемах.

Однако важно понимать: налить трафик ≠ победить. Кампания должна быть не только эффективной для продвижения, но и окупаемой, чтобы бизнес приносил прибыль. Именно поэтому решающее значение имеет качество и стоимость установок.`,
        },
        {
          title: 'Экономика роста',
          content: `Чтобы начать привлекать +50–100 живых органических установок в день с Organic Boost, в среднем достаточно бюджета $200–400. Уже на этом объёме можно увидеть первые конверсии в подписку и начать возвращать вложенные деньги.

Дальше всё упирается в настройки рекламной кампании и сам продукт — в первую очередь, в его ASO (иконка, скриншоты, тексты). Одни ключевые слова приносят хороший трафик и подписки, а другие — заметно хуже.`,
        },
        {
          title: 'Высококонкурентные запросы',
          content: `Чем выше конкуренция по запросу, тем больше трафика потребуется, чтобы закрепиться в топе. Здесь важно учитывать и стоимость установки: условно, трафик по цене $0.12–0.15 за установку позволит дешевле привлечь установки и выйти в плюс, чем установки по $0.24–0.27.

Ключ к успеху — найти правильный баланс между уровнем конкуренции и стоимостью установки, чтобы максимизировать возврат на инвестиции.`,
        },
        {
          title: 'Подход Organic Boost',
          content: `Organic Boost всегда работает по методу:

• тестируем разные ключевые слова и оставляем только те, что приносят реальных платящих пользователей,
• масштабируем кампанию постепенно, чтобы удерживать положительную юнит-экономику.

В итоге заказчик получает не просто установки, а рабочую систему привлечения, которая сама себя окупает и масштабируется без потерь.

Мы фокусируемся на качестве, а не количестве, обеспечивая, чтобы каждая установка способствовала долгосрочному успеху вашего приложения, а не просто временному росту рейтинга.`,
        },
        {
          title: 'Почему качество важнее чем когда-либо',
          content: `В современной конкурентной среде качество ваших установок напрямую влияет на долгосрочный успех приложения. Высококачественные установки с реальных устройств с правильными паттернами поведения пользователей не только повышают рейтинги, но и улучшают общие показатели производительности приложения.

Это включает:
• Лучшие показатели удержания
• Более высокие оценки вовлеченности
• Улучшенные показатели конверсии
• Больше положительных отзывов и оценок

Эти факторы работают вместе, создавая цикл роста, где каждая качественная установка помогает привлекать больше органических пользователей.`,
        },
      ],
    },
  };

  const currentContent =
    content[language as keyof typeof content] || content.en;

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className='pt-24 pb-16 px-6 bg-gradient-to-br from-primary-50 to-accent-50'>
          <div className='max-w-4xl mx-auto'>
            <div className='mb-6'>
              <Link
                href='/knowledge-base'
                className='text-primary hover:text-primary-700 font-medium'
              >
                ← Back to Knowledge Base
              </Link>
            </div>
            <h1 className='text-4xl lg:text-5xl font-bold mb-6'>
              {currentContent.title}
            </h1>
            <p className='text-xl text-text-secondary'>
              {currentContent.subtitle}
            </p>
          </div>
        </section>

        {/* Article Content */}
        <section className='py-16 px-6'>
          <div className='max-w-4xl mx-auto'>
            <article className='prose prose-lg max-w-none'>
              <p className='text-xl text-text-secondary mb-12 leading-relaxed'>
                {currentContent.intro}
              </p>

              {currentContent.sections.map((section, index) => (
                <div key={index} className='mb-12'>
                  <h2 className='text-2xl font-bold mb-6 text-primary'>
                    {section.title}
                  </h2>
                  <div className='text-text-secondary leading-relaxed whitespace-pre-line'>
                    {section.content}
                  </div>
                </div>
              ))}

              {/* CTA Section */}
              <div className='bg-primary-50 rounded-xl p-8 mt-12'>
                <h3 className='text-xl font-bold mb-4 text-primary'>
                  {language === 'ru' ? 'Попробуйте сами' : 'Try It Yourself'}
                </h3>
                <p className='text-text-secondary mb-6'>
                  {language === 'ru'
                    ? 'Вы можете убедиться в этом сами: переходите в наш Telegram-канал и получите 300 бесплатных установок на тест — наглядно оцените результат.'
                    : "You don't have to take our word for it — you can see results in practice. Join our Telegram channel and claim 300 free test installs to evaluate the impact firsthand."}
                </p>
                <div className='flex flex-col sm:flex-row gap-4'>
                  <Link
                    href='https://t.me/organic_aso'
                    className='bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center'
                  >
                    {language === 'ru'
                      ? 'Перейти в наш Telegram'
                      : 'Join Our Telegram'}
                  </Link>
                  <Link
                    href='/contact'
                    className='border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors text-center'
                  >
                    {language === 'ru'
                      ? 'Получить бесплатный аудит'
                      : 'Get Free Audit'}
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
