Нужен только смартфон 
1. **Выберите подходящего провайдера для аренды виртуального сервера.** В нашем случае он должен отвечать двум требованиям.

    - Во-первых, должна присутствовать возможность арендовать “железо” на заграничном сервере.
    - Во-вторых, для оплаты услуг хостинга должна поддерживаться карта Мир.

    Перебрал с десяток популярных предложений и нашел такой вариант [VDSina.com](vdsina.com). Можно оплатить любой отечественной картой, через СБП, WebMoney или QIWI. 

 ![[vpn5min_1 1.png]]   
2. **Укажите подходящую конфигурацию оборудования и предустановленную ОС Ubuntu 22.04.** Нам с головой хватит минимального “железа”:

    - **2 ГБ ОЗУ**
    - **40 ГБ накопитель**
    - **1-ядерный процессор**
    - **32 ТБ трафика**

    Если хотите развернуть на данном сервере что-то еще или переживаете за лимит трафика, подбирайте другие параметры. В указанном случае с нас попросят 0.16$  в день или около 500 руб. в месяц.

3. **Укажите расположение сервера в Амстердаме** и отключите автоматическое создание бекапов.

4. **Оплатите выбранную конфигурацию** любым доступным способом.

![[vpn5min_4 1.jpg]]

5. **На iPhone установите любое приложение для подключения к серверу по SSH.** Рекомендую [Termius](https://apps.apple.com/ru/app/termius-terminal-ssh-client/id549039908).

6. **В приложении создайте новое подключение** и укажите параметры из письма, которое придет после оплаты.

![[vpn5min_3 2.png]]

7. **Подключитесь к серверу и введите всего одну команду:**

    ```bash
    curl -L https://install.pivpn.io | bash
    ```

    Обычно для настройки VPN-сервера придется проделать множество манипуляций и настроек, но энтузиасты с GitHub сильно упростили данный процесс.

![[vpn5min_2 1.png]]

8. **Во время выполнения скрипта будет запрошено имя пользователя и пароль для входа на VPN-сервер.** Введите и запомните их.

    В дальнейшем потребуется утвердительно ответить на несколько вопросов, а в самом конце согласиться на перезагрузку сервера.

9. **Через 2-3 минуты снова подключитесь к серверу в приложении Termius** и введите команду:

    ```bash
    pivpn
    ```

    Увидите список доступных команд для настройки сервера.

10. **Для создания нового пользователя введите команду:**

    ```bash
    pivpn -a
    ```

    После этого укажите имя для подключения. Так вы сможете создать несколько разных пользователей для совместного использования VPN.

11. **Введите следующую команду для отображения QR-кода конфигурации:**

    ```bash
    pivpn -qr
    ```

    Потребуется указать номер пользователя в списке.

12. **На экране появится QR-код**, через который получится быстро настроить VPN-соединение. Можете сделать скриншот и передать его на другой гаджет.

13. **Установите клиент для подключения к стороннему VPN**, например, WireGuard.

14. **Создайте новую конфигурацию и отсканируйте только что сгенерированный QR-код.**

15. **В процессе настройки подтвердите установку VPN-профиля на iPhone.**

# **Готово!** Вы получили собственный VPN-сервер.
