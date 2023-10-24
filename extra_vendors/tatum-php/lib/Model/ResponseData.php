<?php

/**
 * ResponseData Model
 *
 * @copyright (c) 2022-2023 tatum.io
 * @license   MIT
 * @package   Tatum
 * @author    Mark Jivko
 * @link      https://tatum.io/
 *
 * NOTE: This class is auto-generated by tatum.io
 * Do not edit this file manually!
 */

namespace Tatum\Model;
!defined("TATUM-SDK") && exit();

/**
 * ResponseData Model
 */
class ResponseData extends AbstractModel {

    public const _D = null;
    protected static $_name = "ResponseData";
    protected static $_definition = [
        "address" => ["address", "\Tatum\Model\Address", null, "getAddress", "setAddress", null, ["r" => 0]], 
        "amount" => ["amount", "float", null, "getAmount", "setAmount", null, ["r" => 0]], 
        "v_in" => ["vIn", "string", null, "getVIn", "setVIn", null, ["r" => 0]], 
        "v_in_index" => ["vInIndex", "int", null, "getVInIndex", "setVInIndex", null, ["r" => 0]], 
        "script_pub_key" => ["scriptPubKey", "string", null, "getScriptPubKey", "setScriptPubKey", null, ["r" => 0]]
    ];

    /**
     * ResponseData
     *
     * @param mixed[] $data Model data
     */
    public function __construct(array $data = []) {
        foreach(static::$_definition as $k => $v) {
            $this->_data[$k] = isset($data[$k]) ? $data[$k] : $v[5];
        }
    }


    /**
     * Get address
     *
     * @return \Tatum\Model\Address|null
     */
    public function getAddress(): ?\Tatum\Model\Address {
        return $this->_data["address"];
    }

    /**
     * Set address
     * 
     * @param \Tatum\Model\Address|null $address address
     * @throws \InvalidArgumentException
     * @return $this
     */
    public function setAddress(?\Tatum\Model\Address $address) {
        return $this->_set("address", $address);
    }

    /**
     * Get amount
     *
     * @return float|null
     */
    public function getAmount(): ?float {
        return $this->_data["amount"];
    }

    /**
     * Set amount
     * 
     * @param float|null $amount Amount of unprocessed transaction outputs, that can be used for withdrawal. Bitcoin, Litecoin, Bitcoin Cash only.
     * @throws \InvalidArgumentException
     * @return $this
     */
    public function setAmount(?float $amount) {
        return $this->_set("amount", $amount);
    }

    /**
     * Get v_in
     *
     * @return string|null
     */
    public function getVIn(): ?string {
        return $this->_data["v_in"];
    }

    /**
     * Set v_in
     * 
     * @param string|null $v_in Last used unprocessed transaction output, that can be used. Bitcoin, Litecoin, Bitcoin Cash only. If -1, it indicates prepared vOut with amount to be transferred to pool address.
     * @throws \InvalidArgumentException
     * @return $this
     */
    public function setVIn(?string $v_in) {
        return $this->_set("v_in", $v_in);
    }

    /**
     * Get v_in_index
     *
     * @return int|null
     */
    public function getVInIndex(): ?int {
        return $this->_data["v_in_index"];
    }

    /**
     * Set v_in_index
     * 
     * @param int|null $v_in_index Index of last used unprocessed transaction output in raw transaction, that can be used. Bitcoin, Litecoin, Bitcoin Cash only.
     * @throws \InvalidArgumentException
     * @return $this
     */
    public function setVInIndex(?int $v_in_index) {
        return $this->_set("v_in_index", $v_in_index);
    }

    /**
     * Get script_pub_key
     *
     * @return string|null
     */
    public function getScriptPubKey(): ?string {
        return $this->_data["script_pub_key"];
    }

    /**
     * Set script_pub_key
     * 
     * @param string|null $script_pub_key Script of last unprocessed UTXO. Bitcoin SV only.
     * @throws \InvalidArgumentException
     * @return $this
     */
    public function setScriptPubKey(?string $script_pub_key) {
        return $this->_set("script_pub_key", $script_pub_key);
    }
}