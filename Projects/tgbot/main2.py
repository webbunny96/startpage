from aiogram.utils.markdown import *
from aiogram import Bot, Dispatcher, executor, types
import aiogram.utils.markdown as fmt
from uuid import uuid4

from aiogram.types import   ReplyKeyboardRemove, \
    ReplyKeyboardMarkup, KeyboardButton, \
    InlineKeyboardMarkup, InlineKeyboardButton

from aiogram.utils.exceptions import (MessageToEditNotFound, MessageCantBeEdited, MessageCantBeDeleted,
                                      MessageToDeleteNotFound)

from telegram import ParseMode
import config2
import logging
bot = Bot(token = config2.BOT_TOKEN, parse_mode=types.ParseMode.HTML)
dp = Dispatcher(bot)
logging.basicConfig(level=logging.INFO)


def get_keyboard_main_menu(width=1):
    buttons = [
        types.InlineKeyboardButton(text="License", callback_data = "License"),
        types.InlineKeyboardButton(text="Company formation", callback_data = "Company_formation"),
        types.InlineKeyboardButton(text="Bank accounts", callback_data = "Bank_accounts"),
        types.InlineKeyboardButton(text="Merchant and PSP", callback_data = "Merchant_and_PSP"),
        types.InlineKeyboardButton(text="White label", callback_data = "White_label"),
        types.InlineKeyboardButton(text="Trading platform", callback_data = "Trading_platform"),
        types.InlineKeyboardButton(text="CRM", callback_data = "CRM"),
        types.InlineKeyboardButton(text="Inquiry", callback_data = "Inquiry"),
        types.InlineKeyboardButton(text="Live chat", callback_data = "Live_chat"),
        types.InlineKeyboardButton(text="FAQ", callback_data = "FAQ"),
        types.InlineKeyboardButton(text="Our team", callback_data = "Our_team"),
        types.InlineKeyboardButton(text="Go to web", callback_data = "Go_to_web"),
    ]
    keyboard = types.InlineKeyboardMarkup(row_width=width)
    keyboard.add(*buttons)
    return keyboard

def get_keyboard_license_menu(width=1):
    buttons = [
        types.InlineKeyboardButton(text="FX License", callback_data = "FX_License"),
        types.InlineKeyboardButton(text="Crypto License", callback_data = "Crypto_License"),
        types.InlineKeyboardButton(text="Banking License", callback_data = "Banking_License"),
        types.InlineKeyboardButton(text="PSP License", callback_data = "PSP_License"),
        types.InlineKeyboardButton(text="Gambling License", callback_data = "Gambling_License"),
    ]
    keyboard = types.InlineKeyboardMarkup(row_width=width)
    keyboard.add(*buttons)
    return keyboard

def get_keyboard_fx_license_menu(width=1):
    buttons = [
        types.InlineKeyboardButton(text="Fiji Forex License", callback_data = "Fiji_Forex_License"),
        types.InlineKeyboardButton(text="Hong Kong Forex License", callback_data = "Hong_Kong_Forex_License"),
        types.InlineKeyboardButton(text="Saint Vincent Forex License", callback_data = "Saint_Vincent_Forex_License"),
    ]
    keyboard = types.InlineKeyboardMarkup(row_width=width)
    keyboard.add(*buttons)
    return keyboard

def get_keyboard_Fiji_license_menu(width=2):
    buttons = [
        types.InlineKeyboardButton(text="Taxes", callback_data = "Taxes"),
        types.InlineKeyboardButton(text="Inquiry", callback_data = "Inquiry"),
        types.InlineKeyboardButton(text="FAQ", callback_data = "FAQ"),
        types.InlineKeyboardButton(text="Live chat", callback_data = "Live_chat"),
    ]
    keyboard = types.InlineKeyboardMarkup(row_width=width)
    keyboard.add(*buttons)
    return keyboard

@dp.message_handler(commands="start")
async def cmd_start(message: types.Message):
    await message.answer("Main menu", reply_markup=get_keyboard_main_menu())

@dp.callback_query_handler(lambda c: c.data == "License")
async def License(callback_query: types.CallbackQuery):
        await bot.answer_callback_query(callback_query.id, text='License')
        await bot.send_message(callback_query.from_user.id, 'License', reply_markup=get_keyboard_license_menu())



@dp.callback_query_handler(lambda c: c.data == "FX_License")
async def fxLicense(callback_query: types.CallbackQuery):
        await bot.answer_callback_query(callback_query.id, text='FX_License')
        await bot.send_message(callback_query.from_user.id, 'FX License', reply_markup=get_keyboard_fx_license_menu())

@dp.callback_query_handler(lambda c: c.data == "Fiji_Forex_License")
async def FijiLicense(callback_query: types.CallbackQuery):
        media = types.MediaGroup()
        media.attach_photo(types.InputFile('./menuIcon/FX B2B Hub Telegram mockup - Page 1.jpeg'))
        await bot.send_media_group(callback_query.from_user.id, media=media)

        await bot.answer_callback_query(callback_query.id, text='Fiji_Forex_License')
        await bot.send_message(callback_query.from_user.id, "Fiji Forex License As part of its regulatory responsibilities, the Reserve Bank of Fiji acts as gate-keepers for the respective sectors it supervises. Interested entities who would like to pursue the undertaking of these regulated activities would need to be licensed and/or registered by the Reserve Bank. This applies to the business/activity of: banking (including credit institutions), insurance, restricted foreign exchange dealing, money changer, insurance broker, insurance agent, securities exchange, stock broker, investment advisor, capital raising, credit reporting agency, credit information provider and credit report recipient. The Reserve Bank supervises the Fiji National Provident Fund and the Fiji Development Bank.  The former through the FNPF Act and the latter through the direction of the Minister of Economy under the provisions of the Banking Act. Provided here are the list of licensed entities for the various industries, while a separate section provides the licensing/registration checklists for these different activities.")
        media_v = types.MediaGroup()
        media_v.attach_photo(types.InputFile('./menuIcon/FX B2B Hub Telegram mockup - Page 1 (1).jpeg'))
        await bot.send_media_group(callback_query.from_user.id, media=media_v)
        await bot.send_message(callback_query.from_user.id, 'Fiji Forex License',  reply_markup=get_keyboard_Fiji_license_menu())

@dp.callback_query_handler(lambda c: c.data == "Taxes")
async def fxLicense(callback_query: types.CallbackQuery):
        await bot.answer_callback_query(callback_query.id, text='Taxes')
        await bot.send_message(callback_query.from_user.id, 'Direct message to the admin')

@dp.callback_query_handler(lambda c: c.data == "Inquiry")
async def fxLicense(callback_query: types.CallbackQuery):
        await bot.answer_callback_query(callback_query.id, text='Inquiry')
        await bot.send_message(callback_query.from_user.id, 'Leave your email / ohone and our manager will contact you asap')

@dp.callback_query_handler(lambda c: c.data == "FAQ")
async def fxLicense(callback_query: types.CallbackQuery):
        await bot.answer_callback_query(callback_query.id, text='FAQ')
        await bot.send_message(callback_query.from_user.id, '''<pre>1. What do you need to obtain a Forex Broker License?
Here's a small list for getting a Forex license in any jurisdiction:
corporate document regulation;
registration of the company;
required AML/KYC procedures;
state fees;
opened corporate bank account;
opened merchant account.
The docs requirements vary depending on the jurisdiction.
2.How much does an FX license cost?
Price of the license depends on jurisdiction and market, it starts from $ 5 000.00 up to $ 300 000.00.
3. How long does it take to get an FX license?
Depends on license from 3 business days to 12 months, depends on jurisdiction and market.
4.What is the minimum capital to establish FX brokerage?
Here are the main expenses which may be required at the beginning: license application fee, deposit, monthly operational fees, company registration, trading platform, liquidity.
 
5. How much does a company must freeze for the licence?
 
Some licenses, for example  FCA UK requires GBP 730 000 deposit, some offshore licenses does not require any deposit.</pre>''')

@dp.callback_query_handler(lambda c: c.data == "Live_chat")
async def fxLicense(callback_query: types.CallbackQuery):
        await bot.answer_callback_query(callback_query.id, text='Live chat')
        await bot.send_message(callback_query.from_user.id, '''<pre>Tax for individuals 
Applied to individuals who respond to criteria of tax resident one of which is to be in the country at least 183 days. If an individual is domiciled in the UK, the individual has to impose taxes on worldwide income. Double taxation can be avoided if the corresponding Double Taxation Agreement between jurisdictions is concluded. 
If an individual is a British resident and has no domicile status, the individual receives a privilege to elude paying tax on foreign income providing that the income is not brought to the UK (remittance). Non-residents pay income tax if it was received in the UK jurisdiction. 
Income tax
Imposed upon salaries, bonuses, pensions, and savings accounts interest. The standard Personal Allowance is £12,570, which is the amount of income you do not have to pay tax on. Your Personal Allowance may be bigger if you claim Marriage  </pre>''')


if __name__ == "__main__":
    # Запуск бота
    executor.start_polling(dp, skip_updates=True)
# Запускаем бота
bot.polling(none_stop=True, interval=0)